import axios from 'axios';

const getContinentIdFromHref = (url) => {
  const continentIdWithSlash = url.slice(40);
  const continentId = continentIdWithSlash.slice(0, -1);

  return continentId;
};

const getContinents = async () => {
  const res = await axios.get('https://api.teleport.org/api/continents/');
  const continents = res.data._links['continent:items'].map(({ href, name }) => {
    return { continentId: getContinentIdFromHref(href), name };
  });
  return continents;
};

const getCitiesByContinent = async ({ continentId, name: continentName }) => {
  const res = await axios.get(
    `https://api.teleport.org/api/continents/${encodeURI(continentId)}/urban_areas/`
  );
  const cities = res.data._links['ua:items'].map(({ name }) => {
    return { name, continent: continentName };
  });
  return cities;
};

const getAllCities = async () => {
  const continents = await getContinents();
  const continentsCitiesRequests = continents.map(async (continent) => {
    return await getCitiesByContinent(continent);
  });
  const cities = await Promise.all(continentsCitiesRequests);
  return cities;
};
export { getContinents, getCitiesByContinent, getAllCities };
