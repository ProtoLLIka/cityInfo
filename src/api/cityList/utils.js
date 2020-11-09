/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import getParamFromHref from 'helpers/getParamFromHref';

const getContinents = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_CONTINENTS}`).catch((err) => err);

  const continentsLinks = data._links['continent:items'];
  const continentsWithAntarctica = continentsLinks.map(({ href, name }) => ({
    continentId: getParamFromHref(href, 'geonames'),
    name,
  }));
  const continents = continentsWithAntarctica.filter(({ name }) => name !== 'Antarctica');

  return continents;
};

const getCitiesByContinent = async ({ continentId, name: continentName }) => {
  const { data } = await axios
    .get(`${process.env.REACT_APP_CONTINENTS}${encodeURI(continentId)}/urban_areas/`)
    .catch((err) => err);

  const cities = data._links['ua:items'].map(({ name }) => ({
    name,
    continent: continentName,
  }));

  return cities;
};

const getAllCities = async () => {
  const continents = await getContinents();
  const continentsCitiesReq = continents.map(async (continent) => getCitiesByContinent(continent));
  const reqResults = await Promise.allSettled(continentsCitiesReq);
  const cities = reqResults.reduce((prev, continent) => {
    const { status, value } = continent;
    if (status !== 'fulfilled') {
      return [...prev];
    }
    return [...prev, value];
  }, []);

  return cities;
};

export { getContinents, getCitiesByContinent, getAllCities };
