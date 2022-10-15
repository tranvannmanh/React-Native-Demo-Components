import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyActivityIndicator from './src/components/MyActivityIndicator';
import MyButton from './src/components/MyButton';
import MyFlatlist from './src/components/MyFlatlist';
import MyImage from './src/components/MyImage';
import MyImagebackground from './src/components/MyImagebackground';
import MyModal from './src/components/MyModal';
import MyPressable from './src/components/MyPressable';
import MyScrollView from './src/components/MyScrollView';
import MySectionList from './src/components/MySectionList';
import MySwitch from './src/components/MySwitch';
import MyText from './src/components/MyText';
import MyTouchableOpacity from './src/components/MyTouchableOpacity';
import MyTouchableWithoutFeedback from './src/components/MyTouchableWithoutFeedback';
// import Input from './src/components/Input';
// import Text from './src/components/Text';
import ViewBox from './src/components/ViewBox';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Input /> */}
      {/* <Text /> */}
      {/* <ViewBox /> */}
      {/* <MyActivityIndicator /> */}
      {/* <MyButton /> */}
      {/* <MyFlatlist /> */}
      {/* <MyImage />
      <StatusBar style="auto" /> */}
      {/* <MyImagebackground /> */}
      {/* <MySwitch /> */}
      {/* <MyText /><My */}
      {/* <MyTouchableWithoutFeedback /> */}
      {/* <MyTouchableOpacity /> */}
      {/* <MyScrollView /> */}
      {/* <MySectionList /> */}
      {/* <MyModal /> */}
      <MyPressable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
      // alignItems: 'center',
      // paddingHorizontal: 16,
      // justifyContent: 'center',
  },
});
