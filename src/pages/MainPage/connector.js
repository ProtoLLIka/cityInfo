import { connect } from 'react-redux';
import { getCityListState } from '../../store/reducers/cityList/selectors';

const mapStateToProps = (state) => ({
  state: getCityListState(state),
});

const Connect = (Component) => connect(mapStateToProps)(Component);

export default Connect;
