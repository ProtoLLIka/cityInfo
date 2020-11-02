import { connect } from 'react-redux';
import { getCity, getLoadingStatus } from 'store/reducers/city/selector';

const mapStateToProps = (state) => ({
  city: getCity(state),
  isLoading: getLoadingStatus(state),
});

const Connect = (Component) => connect(mapStateToProps)(Component);

export default Connect;
