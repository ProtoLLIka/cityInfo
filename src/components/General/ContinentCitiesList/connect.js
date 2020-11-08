import { connect } from 'react-redux';

import getCity from 'store/reducers/city/actions';
import View from './view';

const mapDispatchToProps = (dispatch) => ({
  getCity: (name) => {
    dispatch(getCity(name));
  },
});

const ConnectedView = connect(null, mapDispatchToProps)(View);

export default ConnectedView;
