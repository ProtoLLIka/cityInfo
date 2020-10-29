import { connect } from 'react-redux';

import { getCities, getFilterType } from 'store/reducers/cityList/selectors';

const mapStateToProps = (state) => ({
  cities: getCities(state),
  filterType: getFilterType(state),
});

const Connect = (Component) => connect(mapStateToProps)(Component);

export default Connect;
