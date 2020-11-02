import { connect } from 'react-redux';

import getCity from 'store/reducers/city/actions';
import { getCities } from 'store/reducers/cityList/selectors';

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCity: (name) => {
    dispatch(getCity(name));
  },
});

const Connect = (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);

export default Connect;
