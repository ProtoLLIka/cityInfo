import { connect } from 'react-redux';

import { getCities } from 'store/reducers/cityList/selectors';
import Controller from './controller';

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

const ConnectedController = connect(mapStateToProps)(Controller);

export default ConnectedController;
