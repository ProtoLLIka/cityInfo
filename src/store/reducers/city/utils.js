import axios from 'axios';

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

const getChartAndSummary = async (cityName) => {
  const city_slug = await getCitySlug(cityName);
  const { data, error } = await axios.get(
    `https://api.teleport.org/api/urban_areas/${encodeURI(city_slug)}/scores/`
  );

  if (error) {
    return {};
  }

  const { summary, chart } = data;

  return { chart: charData, summary: summary };
};

const getCitySlug = async (cityName) => {
  const { data } = await axios.get('https://api.teleport.org/api/urban_areas/');
  const urbanAreas = data._links['ua:item'];
  const city = urbanAreas.find(({ name }) => city.name.toLowerCase() === cityName.toLowerCase());
  const citySlug = city.href.slice(41).slice(0, -1);

  return city_slug;
};

const getTitleImg = async (cityName) => {
  const citySlug = await getCitySlug(cityName);
  const {
    data: {
      photos: [photo],
    },
  } = await axios.get(`https://api.teleport.org/api/urban_areas/${encodeURI(citySlug)}/images/`);
  const titleImg = photo.image.web;

  return titleImg;
};

const getBasicInfo = async (geonameId) => {
  const {
    data: {
      location: {
        latlon: { latitude, longitude },
      },
    },
  } = await axios.get(`https://api.teleport.org/api/cities/${geonameId}/`);
  const result = {
    name: data.name,
    location: {
      lat: latitude,
      lng: longitude,
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
