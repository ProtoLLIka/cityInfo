import { connect } from 'react-redux';

import { getCities } from 'store/reducers/cityList/selectors';
import { generateCityList } from 'store/reducers/cityList/actions';

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  generateCityList: () => {
    dispatch(generateCityList());
  },
});

const Connect = (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);

export default Connect;