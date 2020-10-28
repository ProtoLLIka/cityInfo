import { connect } from 'react-redux';

import { changeFilter, generateCityList } from '../../../store/reducers/cityList/actions';

const mapDispatchToProps = (dispatch) => ({
  generateCityList: () => {
    dispatch(generateCityList());
  },
  changeFilter: (type) => {
    dispatch(changeFilter(type));
  },
});

const Connector = (Component) => connect(null, mapDispatchToProps)(Component);

export default Connector;
