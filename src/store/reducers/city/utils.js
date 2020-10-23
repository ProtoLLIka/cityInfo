import axios from 'axios';
const searchCity = async (cityName) => {
  const geonameId = await getCityGeoname();
  const basicInfo = await getBasicInfp(geonameId);
  const titileImg = await getTitleImg(geonameId);
  const chartAndSummary = await getChartAndSummary();
};
const getTitleImg = async (geonameId) => {};

const getBasicInfp = async (geonameId) => {
  const info = await axios.get(`https://api.teleport.org/api/cities/${geonameId}/`).data;
  const result = {
    name: info.name,
    location: {
      lat: info.location.latlon.latitude,
      lng: info.location.latlon.longitude,
    },
    population: info.population,
  };
  return result;
};

const getCityGeoname = async () => {
  const res = await axios.get(`https://api.teleport.org/api/cities/?search=${encodeURI(cityName)}`);
  const geonameId = res.data._embedded['city:search-results']._links['city:item'].href
    .slice(36)
    .slice(0, -1);
  console.log(geonameId);
  return geonameId;
};

export {};

//https://api.teleport.org/api/cities/geonameid:524901/
//https://api.teleport.org/api/cities/geonameid:703448/
