/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import getCitySlugFromHref from 'helpers/getCitySlugFromHref';
import getGeonameIdFromHref from 'helpers/getGeonameIdFromHref';
import {
  COST_OF_LIVING, HOUSING, CULTURE, CLIMATE,
} from 'consts/consts';

const getCitySlug = async (cityName) => {
  const { data } = await axios.get(process.env.REACT_APP_URBAN_AREAS);
  const urbanAreasLinks = data._links['ua:item'];
  const city = urbanAreasLinks.find(({ name }) => name.toLowerCase() === cityName.toLowerCase());
  const citySlug = getCitySlugFromHref(city.href);

  return citySlug;
};

const getCityGeoname = async (cityName) => {
  const { data } = await axios.get(`${process.env.REACT_APP_CITIES}?search=${encodeURI(cityName)}`);
  const searchResults = data._embedded['city:search-results'];
  const linkFirstOfResults = searchResults[0]._links['city:item'].href;
  const geonameId = getGeonameIdFromHref(linkFirstOfResults);

  return geonameId;
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

  const basicInfo = {
    name,
    location: {
      lat: latitude,
      lng: longitude,
    },
    population,
  };

  return basicInfo;
};

const getTitleImg = async (citySlug) => {
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

const getChartAndSummary = async (citySlug) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/scores/`,
  );

  const { categories, summary } = data;

  return { chart: categories, summary };
};

const getCostOfLiving = (categories) => {
  const { data: costOfLiving } = categories.find(({ id }) => id === COST_OF_LIVING);
  const goodsListWithApiTitle = costOfLiving.map(({ currency_dollar_value: value, label }) => ({
    value,
    label,
  }));
  const goodsList = goodsListWithApiTitle.filter(({ value }) => value);

  return {
    id: COST_OF_LIVING,
    data: goodsList,
  };
};

const getHousing = (categories) => {
  const { data: housing } = categories.find(({ id }) => id === HOUSING);
  const houseCostListWithTeleScore = housing.map(({ currency_dollar_value: value, label }) => ({
    value,
    label,
  }));
  const houseCostList = houseCostListWithTeleScore.filter(({ value }) => value);

  return {
    id: HOUSING,
    data: houseCostList,
  };
};

const getCulture = (categories) => {
  const { data: culture } = categories.find(({ id }) => id === CULTURE);
  const houseCostListWithTeleScore = culture.map(({ int_value: count, label }) => ({
    count,
    label,
  }));
  const houseCostList = houseCostListWithTeleScore.filter(({ count }) => count);

  return {
    id: CULTURE,
    data: houseCostList,
  };
};

const getWeather = (categories) => {
  const { data: climate } = categories.find(({ id }) => id === CLIMATE);
  const climateParams = climate.map((climateParam) => {
    const param = climateParam;
    delete param.id;
    delete param.type;
    const paramValue = param.float_value ? param.float_value : param.string_value;
    return { label: param.label, value: paramValue };
  });

  return {
    id: CLIMATE,
    data: climateParams,
  };
};

const getCityDetails = async (citySlug) => {
  const {
    data: { categories },
  } = await axios.get(`${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/details/`);
  const costOfLiving = getCostOfLiving(categories);
  const housing = getHousing(categories);
  const culture = getCulture(categories);
  const weather = getWeather(categories);

  return [costOfLiving, housing, culture, weather];
};

const searchCity = async (cityName) => {
  const citySlug = await getCitySlug(cityName);
  const geonameId = await getCityGeoname(cityName);
  const { name, location, population } = await getBasicInfo(geonameId);
  const titleImg = await getTitleImg(citySlug);
  const { summary, chart } = await getChartAndSummary(citySlug);
  const details = await getCityDetails(citySlug);

  return {
    city: {
      name,
      summary,
      location,
      titleImg,
      population,
      id: geonameId,
      categoryChart: chart,
      details,
    },
  };
};

export default searchCity;
