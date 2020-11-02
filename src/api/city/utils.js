/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import getCitySlugFromHref from 'helpers/getCitySlugFromHref';
import getGeonameIdFromHref from 'helpers/getGeonameIdFromHref';

const getCitySlug = async (cityName) => {
  const { data } = await axios.get(process.env.REACT_APP_URBAN_AREAS);
  const urbanAreasLinks = data._links['ua:item'];
  const city = urbanAreasLinks.find(({ name }) => name.toLowerCase() === cityName.toLowerCase());
  const citySlug = getCitySlugFromHref(city.href);

  return citySlug;
};

const getChartAndSummary = async (cityName) => {
  const citySlug = await getCitySlug(cityName);
  const { data } = await axios.get(
    `${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/scores/`,
  );

  const { chart, summary } = data;

  return { chart, summary };
};

const getTitleImg = async (cityName) => {
  const citySlug = await getCitySlug(cityName);
  const {
    data: {
      photos: [
        {
          image: { web },
        },
      ],
    },
  } = await axios.get(`${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/images/`);

  return web;
};

const getBasicInfo = async (geonameId) => {
  const {
    data: {
      name,
      population,
      location: {
        latlon: { latitude, longitude },
      },
    },
  } = await axios.get(`${process.env.REACT_APP_CITIES}${geonameId}/`);

  const result = {
    name,
    location: {
      lat: latitude,
      lng: longitude,
    },
    population,
  };

  return result;
};

const getCityGeoname = async (cityName) => {
  const { data } = await axios.get(`${process.env.REACT_APP_CITIES}?search=${encodeURI(cityName)}`);
  const searchResults = data._embedded['city:search-results'];
  const linkFirstOfResults = searchResults[0]._links['city:item'].href;
  const geonameId = getGeonameIdFromHref(linkFirstOfResults);

  return geonameId;
};

const searchCity = async (cityName) => {
  const geonameId = await getCityGeoname(cityName);
  const { name, location, population } = await getBasicInfo(geonameId);
  const titleImg = await getTitleImg(name);
  const { summary, chart } = await getChartAndSummary(name);

  return {
    city: {
      name,
      summary,
      location,
      titleImg,
      population,
      id: geonameId,
      categoryChart: chart,
    },
  };
};

export default searchCity;
