import { connect } from 'react-redux';

import getCity from 'store/reducers/city/actions';

const mapDispatchToProps = (dispatch) => ({
  getCity: (name) => {
    dispatch(getCity(name));
  },
});

const Connector = (Component) => connect(null, mapDispatchToProps)(Component);

export default Connector;
