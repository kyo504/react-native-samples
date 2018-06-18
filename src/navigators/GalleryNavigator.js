import { createStackNavigator } from 'react-navigation';

import Gallery from '../screens/Gallery';
import GalleryModal from '../screens/GalleryModal';

export default createStackNavigator(
  {
    Gallery: {
      screen: Gallery,
    },
    GalleryModal: {
      screen: GalleryModal,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    mode: 'modal',
  }
);
