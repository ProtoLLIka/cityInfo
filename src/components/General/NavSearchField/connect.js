import { connect } from 'react-redux';

import getCity from 'store/reducers/city/actions';
import { getCities } from 'store/reducers/cityList/selectors';
import View from './view';

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCity: (name) => {
    dispatch(getCity(name));
  },
});

const ConnectedView = connect(mapStateToProps, mapDispatchToProps)(View);

export default ConnectedView;
