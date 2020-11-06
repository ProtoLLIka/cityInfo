const getCity = (state: { city }) => city;
const getLoadingStatus = (state) => getCity(state).isLoading;
const getStateCity = (state: { city }) => city;

export { getCity, getLoadingStatus, getStateCity };
