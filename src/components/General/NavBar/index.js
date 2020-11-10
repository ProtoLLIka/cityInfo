import { isMobile } from 'react-device-detect';

import NavBarMobile from 'components/General/NavBarMobile';
import ConnectedView from './connector';

const Component = isMobile ? NavBarMobile : ConnectedView;
export default Component;
