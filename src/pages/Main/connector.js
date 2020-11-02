import { connect } from 'react-redux';

import { getCities, getFilterType } from 'store/reducers/cityList/selectors';

const mapStateToProps = (state) => ({
  allCities: getCities(state),
  continentName: getFilterType(state),
});

const Connect = (Component) => connect(mapStateToProps)(Component);

export default Connect;
