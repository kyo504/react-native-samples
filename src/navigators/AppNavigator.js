/**
 * @flow
 */
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import FlexDirectionBasics from '../screens/FlexDirectionBasics';
import FlexWrapBasics from '../screens/FlexWrapBasics';
import JustifyContentBasics from '../screens/JustifyContentBasics';
import AlignContentBasics from '../screens/AlignContentBasics';
import AlignItemsBasics from '../screens/AlignItemsBasics';
import FlexBasics from '../screens/FlexBasics';
import FlexBasics2 from '../screens/FlexBasics';
import FlexAdvanced from '../screens/FlexAdvanced';
import AlignSelfBasics from '../screens/AlignSelfBasics';
import ViewBasics from '../screens/ViewBasics';
import TextBasics from '../screens/TextBasics';
import TextInputBasics from '../screens/TextInputBasics';
import TouchableBasics from '../screens/TouchableBasics';
import ScrollViewBasics from '../screens/ScrollViewBasics';
import TodoApp from '../screens/TodoApp';
import TodoApp2 from '../screens/TodoApp2';
import FlatListBasics from '../screens/FlatListBasics';
import SectionListBasics from '../screens/SectionListBasics';
import ImageBasics from '../screens/ImageBasics';
import AsyncStorageBasics from '../screens/AsyncStorageBasics';
import DimensionsBasis from '../screens/DimensionsBasics';
import ModalBasics from '../screens/ModalBasics';
import AppStateExample from '../screens/AppStateExample';
import NetInfoExample from '../screens/NetInfoExample';
import GalleryNavigator from './GalleryNavigator';
import CounterExample from '../screens/CounterExample';
import CounterReduxExample from '../screens/CounterReduxExample';

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Samples',
      },
    },
    FlexDirectionBasics: {
      screen: FlexDirectionBasics,
      navigationOptions: {
        headerTitle: 'FlexDirectionBasics',
      },
    },
    FlexWrapBasics: {
      screen: FlexWrapBasics,
      navigationOptions: {
        headerTitle: 'FlexWrapBasics',
      },
    },
    JustifyContentBasics: {
      screen: JustifyContentBasics,
      navigationOptions: {
        headerTitle: 'JustifyContentBasics',
      },
    },
    AlignContentBasics: {
      screen: AlignContentBasics,
      navigationOptions: {
        headerTitle: 'AlignContentBasics',
      },
    },
    AlignItemsBasics: {
      screen: AlignItemsBasics,
      navigationOptions: {
        headerTitle: 'AlignItemsBasics',
      },
    },
    FlexBasics: {
      screen: FlexBasics,
      navigationOptions: {
        headerTitle: 'FlexBasics',
      },
    },
    FlexBasics2: {
      screen: FlexBasics2,
      navigationOptions: {
        headerTitle: 'FlexBasics2',
      },
    },
    FlexAdvanced: {
      screen: FlexAdvanced,
      navigationOptions: {
        headerTitle: 'FlexAdvanced',
      },
    },
    AlignSelfBasics: {
      screen: AlignSelfBasics,
      navigationOptions: {
        headerTitle: 'AlignSelfBasics',
      },
    },
    ViewBasics: {
      screen: ViewBasics,
      navigationOptions: {
        headerTitle: 'ViewBasics',
      },
    },
    TextBasics: {
      screen: TextBasics,
      navigationOptions: {
        headerTitle: 'TextBasics',
      },
    },
    TextInputBasics: {
      screen: TextInputBasics,
      navigationOptions: {
        headerTitle: 'TextInputBasics',
      },
    },
    TouchableBasics: {
      screen: TouchableBasics,
      navigationOptions: {
        headerTitle: 'TouchableBasics',
      },
    },
    ScrollViewBasics: {
      screen: ScrollViewBasics,
      navigationOptions: {
        headerTitle: 'ScrollViewBasics',
      },
    },
    TodoApp: {
      screen: TodoApp,
      navigationOptions: {
        headerTitle: 'TodoApp',
      },
    },
    TodoApp2: {
      screen: TodoApp2,
      navigationOptions: {
        headerTitle: 'TodoApp2',
      },
    },
    FlatListBasics: {
      screen: FlatListBasics,
      navigationOptions: {
        headerTitle: 'FlatListBasics',
      },
    },
    ImageBasics: {
      screen: ImageBasics,
      navigationOptions: {
        headerTitle: 'ImageBasics',
      },
    },
    SectionListBasics: {
      screen: SectionListBasics,
      navigationOptions: {
        headerTitle: 'SectionListBasics',
      },
    },
    AsyncStorageBasics: {
      screen: AsyncStorageBasics,
      navigationOptions: {
        headerTitle: 'AsyncStorageBasics',
      },
    },
    DimensionsBasis: {
      screen: DimensionsBasis,
      navigationOptions: {
        headerTitle: 'DimensionsBasis',
      },
    },
    ModalBasics: {
      screen: ModalBasics,
      navigationOptions: {
        headerTitle: 'ModalBasics',
      },
    },
    AppStateExample: {
      screen: AppStateExample,
      navigationOptions: {
        headerTitle: 'AppStateExample',
      },
    },
    NetInfoExample: {
      screen: NetInfoExample,
      navigationOptions: {
        headerTitle: 'NetInfoExample',
      },
    },
    GalleryApp: {
      screen: GalleryNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Counter: {
      screen: CounterExample,
    },
    CounterRedux: {
      screen: CounterReduxExample,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
