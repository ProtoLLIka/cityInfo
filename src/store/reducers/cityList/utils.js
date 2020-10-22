import axios from 'axios';

const getContinents = async () => {
  const res = await axios.get('https://api.teleport.org/api/continents/');
  const continents = res.data._links['continent:items'].map((continent) => {
    return { continentId: continent.href.slice(40).slice(0, -1), name: continent.name };
  });
  return continents;
};

const getCitiesByContinent = async (continent) => {
  const res = await axios.get(
    `https://api.teleport.org/api/continents/${encodeURI(continent.continentId)}/urban_areas/`
  );
  const cities = res.data._links['ua:items'].map((city) => {
    return { name: city.name, continent: continent.name };
  });
  return cities;
};

const getAllCities = async () => {
  const continents = await getContinents();
  const cities = await Promise.all(
    continents.map(async (continent) => {
      return await getCitiesByContinent(continent);
    })
  );
  const result = [].concat.apply([], cities);
  return result;
};
export { getContinents, getCitiesByContinent, getAllCities };
