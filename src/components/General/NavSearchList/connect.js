/* eslint-disable import/named */
import { connect } from 'react-redux';

import { getCity } from 'store/reducers/city/actions';
import Controller from './controller';

const mapDispatchToProps = (dispatch) => ({
  getCity: (name) => {
    dispatch(getCity(name));
  },
});

const ConnectedController = connect(null, mapDispatchToProps)(Controller);

export default ConnectedController;
