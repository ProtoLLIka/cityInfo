import { connect } from 'react-redux';

import { changeFilter, generateCityList } from 'store/reducers/cityList/actions';
import Controller from './controller';

const mapDispatchToProps = (dispatch) => ({
  generateCityList: () => {
    dispatch(generateCityList());
  },
  changeFilter: (type) => {
    dispatch(changeFilter(type));
  },
});

const ConnectedView = connect(null, mapDispatchToProps)(Controller);

export default ConnectedView;
