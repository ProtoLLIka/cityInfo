import { connect } from 'react-redux';

import { getCities } from 'store/reducers/cityList/selectors';
import { generateCityList } from 'store/reducers/cityList/actions';
import View from './view';

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  generateCityList: () => {
    dispatch(generateCityList());
  },
});

const ConnectedView = connect(mapStateToProps, mapDispatchToProps)(View);

export default ConnectedView;
