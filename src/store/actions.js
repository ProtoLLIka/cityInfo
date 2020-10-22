import axios from 'axios';
import { CITY_SEARCH_STARTED, CITY_SEARCH_FINISHED, CITY_SEARCH_ERROR } from './reducers/types';

const setSearchCity = (value) => {
  return (dispatch) => {
    dispatch(searchCityStarted());

    axios
      .get(`https://api.teleport.org/api/cities/?search=${value}`)
      .then((res) => {
        //Поковырять api 
        const geonameid = res.data._embedded['city:search-results'][0]._links['city:item'].href;
        const cityName =
          res.data._embedded['city:search-results'][0].matching_alternate_names[0].name;
        axios
          .get(geonameid)
          .then(({ data: { location, population }}) => {
            const city = {
              name: cityName,
              population: population,
              xPos: location.latlon.latitude,
              yPos: location.latlon.longitude,
            };
            const chatData = await getChartData(geonameid)
            dispatch(
              searchCitySuccess({
                city: city,
                chatData: chatData
              })
            );
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        dispatch(searchCityError(err.message));
      });
  };
};

const searchCityStarted = () => ({ type: CITY_SEARCH_STARTED, isDowloading: true });
const searchCitySuccess = (data) => ({
  type: CITY_SEARCH_FINISHED,
  data: data,
  isDowloading: false,
});
const searchCityError = (error) => ({ type: CITY_SEARCH_ERROR, error: true, isDowloading: false });

const getChartData = async (geonameid) => {
  const res = await axios.get(geonameid);

  const chartData = res.data.categories.map((element) => ({
    barName: element.name,
    barValue: element.score_out_of_10,
  }));
};

export { setSearchCity };