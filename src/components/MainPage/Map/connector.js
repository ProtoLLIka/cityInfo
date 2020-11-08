import { connect } from 'react-redux';

import { changeFilter, generateCityList } from 'store/reducers/cityList/actions';
import View from './view';

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (type) => {
    dispatch(changeFilter(type));
  },
  generateCityList: () => {
    dispatch(generateCityList());
  },
});

const ConnectedView = connect(null, mapDispatchToProps)(View);

export default ConnectedView;
