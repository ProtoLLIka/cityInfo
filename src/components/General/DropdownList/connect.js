import { connect } from 'react-redux';

import { getCities } from 'store/reducers/cityList/selectors';

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

const Connect = (Component) => connect(mapStateToProps)(Component);

export default Connect;
