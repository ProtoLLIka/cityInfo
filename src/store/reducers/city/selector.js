const getStateCity = (state) => state.city;
const getCity = (state) => getStateCity(state).city;
const getLoadingStatus = (state) => getStateCity(state).isLoading;

export { getCity, getLoadingStatus, getStateCity };
