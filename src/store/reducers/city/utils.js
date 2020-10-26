import axios from 'axios';

const searchCity = async (cityName) => {
  const geonameId = await getCityGeoname(cityName);
  const basicInfo = await getBasicInfo(geonameId);
  const titileImg = await getTitleImg(basicInfo.name);
  const chartAndSummary = await getChartAndSummary(basicInfo.name);
  return {
    city: {
      name: basicInfo.name,
      id: geonameId,
      location: basicInfo.location,
      population: basicInfo.population,
      titleImg: titileImg,
      categoryChart: chartAndSummary.chart,
      summary: chartAndSummary.summary,
    },
  };
};

const getChartAndSummary = async (cityName) => {
  const city_slug = await getCitySlug(cityName);
  const { data } = await axios.get(
    `https://api.teleport.org/api/urban_areas/${encodeURI(city_slug)}/scores/`
  );
  const charData = data.categories;
  const summary = data.summary;
  return { chart: charData, summary: summary };
};

const getCitySlug = async (cityName) => {
  const { data } = await axios.get('https://api.teleport.org/api/urban_areas/');
  const ua_array = data._links['ua:item'];
  const city = ua_array.filter((city) => city.name === cityName);
  const city_slug = city[0].href.slice(41).slice(0, -1);
  return city_slug;
};

const getTitleImg = async (cityName) => {
  const city_slug = await getCitySlug(cityName);
  const { data } = await axios.get(
    `https://api.teleport.org/api/urban_areas/${encodeURI(city_slug)}/images/`
  );
  const titleImg = data.photos[0].image.web;
  return titleImg;
};

const getBasicInfo = async (geonameId) => {
  const { data } = await axios.get(`https://api.teleport.org/api/cities/${geonameId}/`);
  const result = {
    name: data.name,
    location: {
      lat: data.location.latlon.latitude,
      lng: data.location.latlon.longitude,
    },
    population: data.population,
  };
  return result;
};

const getCityGeoname = async (cityName) => {
  const { data } = await axios.get(
    `https://api.teleport.org/api/cities/?search=${encodeURI(cityName)}`
  );
  const geonameId = data._embedded['city:search-results'][0]._links['city:item'].href
    .slice(36)
    .slice(0, -1);
  return geonameId;
};

export { searchCity };
