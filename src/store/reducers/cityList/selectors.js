const getCityListState = (state) => state.cityList;
const getCities = (state) => getCityListState(state).cities;
const getFilterType = (state) => getCityListState(state).filterType;
const getLoadingStatus = (state) => getCityListState(state).isLoading;

export {
  getCities, getCityListState, getFilterType, getLoadingStatus,
};
