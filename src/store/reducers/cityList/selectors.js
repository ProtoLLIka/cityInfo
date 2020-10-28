const getCities = (state) => state.cityListReducer.list;
const getCityListState = (state) => state.cityListReducer;
const getFilterType = (state) => state.cityListReducer.filterType;
const getLoadingStatus = (state) => state.cityListReducer.isLoading;

export {
  getCities, getCityListState, getFilterType, getLoadingStatus,
};
