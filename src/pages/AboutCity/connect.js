import { connect } from 'react-redux';
import { getCity, getLoadingStatus } from 'store/reducers/city/selector';

import View from './view';

const mapStateToProps = (state) => ({
  city: getCity(state),
  isLoading: getLoadingStatus(state),
});

const ConnectedView = connect(mapStateToProps)(View);

export default ConnectedView;
