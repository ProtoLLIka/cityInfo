/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import getCitySlugFromHref from '../../helpers/getCitySlugFromHref';
import getGeonameIdFromHref from '../../helpers/getGeonameIdFromHref';

const getCitySlug = async (cityName) => {
  const { data } = await axios.get(process.env.REACT_APP_URBAN_AREAS);
  console.log(data);
  const urbanAreasLinks = data._links['ua:item'];
  const city = urbanAreasLinks.find(({ name }) => name.toLowerCase() === cityName.toLowerCase());
  const citySlug = getCitySlugFromHref(city.href);

  return citySlug;
};

const getChartAndSummary = async (cityName) => {
  const citySlug = await getCitySlug(cityName);
  const { data, error } = await axios.get(
    `${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/scores/`, // проверить та ли env переменная
  );

  if (error) {
    return {};
  }

  const { summary, chart } = data;

  return { chart, summary };
};

const getTitleImg = async (cityName) => {
  const citySlug = await getCitySlug(cityName);
  const {
    data: {
      photos: [photo],
    },
    error,
  } = await axios.get(`${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/images/`);

  if (error) {
    return {};
  }

  const titleImg = photo.image.web;

  return titleImg;
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
    error,
  } = await axios.get(`${process.env.REACT_APP_CITIES}${geonameId}/`);

  if (error) {
    return {};
  }

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
  const { data, error } = await axios.get(
    `${process.env.REACT_APP_CITIES}?search=${encodeURI(cityName)}`,
  );

  if (error) {
    return {};
  }

  const searchResults = data._embedded['city:search-results'];
  const linkFirstOfResults = searchResults[0]._links['city:item'].href;
  const geonameId = getGeonameIdFromHref(linkFirstOfResults);

  return geonameId;
};

const searchCity = async (cityName) => {
  const geonameId = await getCityGeoname(cityName);
  const { name, location, population } = await getBasicInfo(geonameId);
  const titileImg = await getTitleImg(name);
  const { summary, chart } = await getChartAndSummary(name);

  return {
    city: {
      name,
      summary,
      location,
      titileImg,
      population,
      id: geonameId,
      categoryChart: chart,
    },
  };
};

export default searchCity;
