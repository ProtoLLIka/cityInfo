import { connect } from 'react-redux';
import { getCity, getLoadingStatus } from 'store/reducers/city/selector';

import Controller from './controller';

const mapStateToProps = (state) => ({
  city: getCity(state),
  isLoading: getLoadingStatus(state),
});

const ConnectedController = connect(mapStateToProps)(Controller);

export default ConnectedController;
