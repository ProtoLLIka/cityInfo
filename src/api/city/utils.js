/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import getParamFromHref from 'helpers/getParamFromHref';
import {
  COST_OF_LIVING, HOUSING, CULTURE, CLIMATE,
} from 'consts/categoryNames';

const getCitySlug = async (cityName) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_URBAN_AREAS).catch((err) => err);

    const urbanAreasLinks = data._links['ua:item'];

    const city = urbanAreasLinks.find(({ name }) => name.toLowerCase() === cityName.toLowerCase());
    const citySlug = getParamFromHref(city.href, 'slug');

    return citySlug;
  } catch (error) {
    throw new Error('Unable to get city geoname');
  }
};

const getCityGeoname = async (cityName) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_CITIES}?search=${encodeURI(cityName)}`,
    );
    const searchResults = data._embedded['city:search-results'];
    const linkFirstOfResults = searchResults[0]._links['city:item'].href;
    const geonameId = getParamFromHref(linkFirstOfResults, 'geonameid');

    return geonameId;
  } catch (error) {
    throw new Error('Unable to get city geoname');
  }
};

const getBasicInfo = async (geonameId) => {
  try {
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
  } catch (error) {
    throw new Error('Unable to get basic info');
  }
};

const getTitleImg = async (citySlug) => {
  try {
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
  } catch (error) {
    throw new Error('Unable to get title img');
  }
};

const getChartAndSummary = async (citySlug) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/scores/`,
    );

    const { categories, summary } = data;

    return { chart: categories, summary };
  } catch (error) {
    throw new Error('Unable to get chart and summary');
  }
};

const getCostOfLiving = (categories) => {
  try {
    const { data: costOfLiving } = categories.find(({ id }) => id === COST_OF_LIVING);
    const goodsList = costOfLiving.reduce((prev, costItem) => {
      const { currency_dollar_value: value, label } = costItem;
      if (!value) {
        return [...prev];
      }
      return [...prev, { value, label }];
    }, []);

    return {
      id: COST_OF_LIVING,
      data: goodsList,
    };
  } catch (error) {
    throw new Error('Unable to get cost of living');
  }
};

const getHousing = (categories) => {
  const { data: housing } = categories.find(({ id }) => id === HOUSING);
  const houseCostList = housing.reduce((prev, housingItem) => {
    const { currency_dollar_value: value, label } = housingItem;
    if (!value) {
      return [...prev];
    }
    return [...prev, { value, label }];
  }, []);

  return {
    id: HOUSING,
    data: houseCostList,
  };
};

const getCulture = (categories) => {
  const { data: culture } = categories.find(({ id }) => id === CULTURE);
  const houseCostList = culture.reduce((prev, cultureItem) => {
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

const getClimate = (categories) => {
  const { data: climate } = categories.find(({ id }) => id === CLIMATE);
  const climateParams = climate.reduce((prev, climateItem) => {
    const climateValue = climateItem.float_value
      ? climateItem.float_value
      : climateItem.string_value;

    return [...prev, { label: climateItem.label, value: climateValue }];
  }, []);

  return {
    id: CLIMATE,
    data: climateParams,
  };
};

const getCityDetails = async (citySlug) => {
  try {
    const {
      data: { categories },
    } = await axios.get(`${process.env.REACT_APP_URBAN_AREAS}${encodeURI(citySlug)}/details/`);

    const costOfLiving = getCostOfLiving(categories);
    const housing = getHousing(categories);
    const culture = getCulture(categories);
    const climate = getClimate(categories);
    const res = {
      costOfLiving,
      housing,
      culture,
      climate,
    };

    return res;
  } catch (error) {
    throw new Error('Unable to get city details');
  }
};

const searchCity = async ({ cityName }) => {
  try {
    const citySlug = await getCitySlug(cityName);
    const geonameId = await getCityGeoname(cityName);
    const { name, location, population } = await getBasicInfo(geonameId);
    const titleImg = await getTitleImg(citySlug);
    const { summary, chart } = await getChartAndSummary(citySlug);
    const details = await getCityDetails(citySlug);

    return {
      name,
      summary,
      location,
      titleImg,
      population,
      id: geonameId,
      categoryChart: chart,
      details,
    };
  } catch (error) {
    throw new Error('City not found');
  }
};

export default searchCity;
