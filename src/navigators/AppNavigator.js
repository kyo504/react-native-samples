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
import CounterReduxExample2 from '../screens/CounterReduxExample2';
import TodoReduxExample from '../screens/TodoReduxExample';
import LayoutAnimation1 from '../screens/LayoutAnimation1';
import LayoutAnimation2 from '../screens/LayoutAnimation2';
import LayoutAnimation3 from '../screens/LayoutAnimation3';
import BounceAnimation from '../screens/BounceAnimation';
import ChasingAnimation from '../screens/ChasingAnimation';
import CompositeAnimation from '../screens/CompositeAnimation';
import DecayAnimation from '../screens/DecayAnimation';
import DragAnimation from '../screens/DragAnimation';
import EasingAnimation from '../screens/EasingAnimation';
import LayoutEventAnimation from '../screens/LayoutEventAnimation';
import MarqueeTextSample from '../screens/MarqueeTextSample';
import PagingAnimation from '../screens/PagingAnimation';
import PanResponderExample from '../screens/PanResponderExample';
import ParallelAnimation from '../screens/ParallelAnimation';
import SequenceAnimation from '../screens/SequenceAnimation';
import SpinningAnimation from '../screens/SpinningAnimation';
import SpringAnimation from '../screens/SpringAnimation';
import StaggerAnimation from '../screens/StaggerAnimation';
import TimingAnimation from '../screens/TimingAnimation';
import TinderAnimation from '../screens/TinderAnimation';
import NativeModuleExample from '../screens/NativeModuleExample';
import SimpleAnimation from '../screens/SimpleAnimation';

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
    CounterRedux2: {
      screen: CounterReduxExample2,
    },
    TodoRedux: {
      screen: TodoReduxExample,
    },
    LayoutAnimation1: LayoutAnimation1,
    LayoutAnimation2: LayoutAnimation2,
    LayoutAnimation3: LayoutAnimation3,
    BounceAnimation: BounceAnimation,
    ChasingAnimation: ChasingAnimation,
    CompositeAnimation: CompositeAnimation,
    DecayAnimation: DecayAnimation,
    DragAnimation: DragAnimation,
    EasingAnimation: EasingAnimation,
    LayoutEventAnimation: LayoutEventAnimation,
    MarqueeTextSample: MarqueeTextSample,
    PagingAnimation: PagingAnimation,
    PanResponderExample: PanResponderExample,
    ParallelAnimation: ParallelAnimation,
    SequenceAnimation: SequenceAnimation,
    SpinningAnimation: SpinningAnimation,
    SpringAnimation: SpringAnimation,
    StaggerAnimation: StaggerAnimation,
    TimingAnimation: TimingAnimation,
    TinderAnimation: TinderAnimation,
    NativeModule: NativeModuleExample,
    SimpleAnimation: SimpleAnimation,
  },
  {
    initialRouteName: 'Home',
  }
);
