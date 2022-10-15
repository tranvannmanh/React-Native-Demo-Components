import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

const MyTouchableWithoutFeedback = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View >
      <View>
        <Text>Count: {count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View >
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default MyTouchableWithoutFeedback;