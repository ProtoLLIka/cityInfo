/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import getParamFromHref from 'helpers/getParamFromHref';
import {
  COST_OF_LIVING, HOUSING, CULTURE, CLIMATE,
} from 'consts/categoryNames';

// TODO
const getCitySlug = async (cityName) => {
  const { data } = await axios.get(process.env.REACT_APP_URBAN_AREAS).catch((err) => err);

  const urbanAreasLinks = data._links['ua:item'];
  const city = urbanAreasLinks.find(({ name }) => name.toLowerCase() === cityName.toLowerCase());
  const citySlug = getParamFromHref(city.href, 'slug');

  return citySlug;
};

const getCityGeoname = async (cityName) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_CITIES}?search=${encodeURI(cityName)}`,
    );
  } catch (error) {
    throw new Error('Unable to get city geoname');
  }

  const searchResults = data._embedded['city:search-results'];
  const linkFirstOfResults = searchResults[0]._links['city:item'].href;
  const geonameId = getParamFromHref(linkFirstOfResults, 'geonameid');

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
  } = await axios.get(`${process.env.REACT_APP_CITIES}${geonameId}/`).catch((err) => err);

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
  } = await axios
    .get(`${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/images/`)
    .catch((err) => err);

  return web;
};

const getChartAndSummary = async (citySlug) => {
  const { data } = await axios
    .get(`${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/scores/`)
    .catch((err) => err);

  const { categories, summary } = data;

  return { chart: categories, summary };
};

const getCostOfLiving = (categories) => {
  const { data } = categories.find(({ id }) => id === COST_OF_LIVING);
  const goodsListWithApiTitle = data.map(({ currency_dollar_value: value, label }) => ({
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
  const { data } = categories.find(({ id }) => id === HOUSING);
  const houseCostListWithTeleScore = data.map(({ currency_dollar_value: value, label }) => ({
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

  const res = culture.reduce((prev, cultureItem) => {
    const { int_value: count, label } = cultureItem;

    if (count) {
      return [...prev, { count, label }];
    }

    return prev;
  }, []);

  return {
    id: CULTURE,
    data: houseCostList,
  };
};

const getWeather = (categories) => {
  const { data } = categories.find(({ id }) => id === CLIMATE);
  const climateParams = data.map((climateParam) => {
    const param = climateParam;
    // delete param.id;
    // delete param.type;
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
  } = await axios
    .get(`${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/details/`)
    .catch((err) => err);

  const costOfLiving = getCostOfLiving(categories);
  const housing = getHousing(categories);
  const culture = getCulture(categories);
  const weather = getWeather(categories);

  return {
    costOfLiving,
    housing,
    culture,
    weather,
  };
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
