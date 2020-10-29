const getCities = (state) => state.cityList.cities;
const getCityListState = (state) => state.cityList;
const getFilterType = (state) => state.cityList.filterType;
const getLoadingStatus = (state) => state.cityList.isLoading;

export {
  getCities, getCityListState, getFilterType, getLoadingStatus,
};
