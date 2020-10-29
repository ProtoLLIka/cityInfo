import { connect } from 'react-redux';

import { changeFilter, generateCityList } from 'store/reducers/cityList/actions';

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (type) => {
    dispatch(changeFilter(type));
  },
  generateCityList: () => {
    dispatch(generateCityList());
  },
});

const Connect = (Component) => connect(null, mapDispatchToProps)(Component);

export default Connect;
