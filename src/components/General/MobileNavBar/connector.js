import { connect } from 'react-redux';

import { changeFilter, generateCityList } from 'store/reducers/cityList/actions';
import View from './view';

const mapDispatchToProps = (dispatch) => ({
  generateCityList: () => {
    dispatch(generateCityList());
  },
  changeFilter: (type) => {
    dispatch(changeFilter(type));
  },
});

const ConnectedView = connect(null, mapDispatchToProps)(View);

export default ConnectedView;
