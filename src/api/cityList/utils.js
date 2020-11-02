/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import getContinentIdFromHref from 'helpers/getContinentIdFromHref';

const getContinents = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_CONTINENTS}`);

  const continentsLinks = data._links['continent:items'];
  const continentsWithAntarctica = continentsLinks.map(({ href, name }) => ({
    continentId: getContinentIdFromHref(href),
    name,
  }));
  const continents = continentsWithAntarctica.filter(({ name }) => name !== 'Antarctica');

  return continents;
};

const getCitiesByContinent = async ({ continentId, name: continentName }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_CONTINENTS}${encodeURI(continentId)}/urban_areas/`,
  );

  const cities = data._links['ua:items'].map(({ name }) => ({
    name,
    continent: continentName,
  }));

  return cities;
};

const getAllCities = async () => {
  const continents = await getContinents();
  const continentsCitiesReq = continents.map(async (continent) => getCitiesByContinent(continent));
  const cities = await Promise.all(continentsCitiesReq);

  return cities;
};

export { getContinents, getCitiesByContinent, getAllCities };
