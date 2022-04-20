import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Text, Animated, Image, Pressable } from "react-native";
import styles from "./styles";

const hideIcon = require("../../../assets/pictures/hide-icon.png");

const Input = ({ placeholder, secureText }) => {
  const [inputValue, setInputValue] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isHideSecureText, setIsHideSecureText] = useState(true);
  const inputAnim = useRef(new Animated.Value(0)).current;

  const inputActiveAnim = () => {
    Animated.timing(inputAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const inputInactiveAnim = () => {
    Animated.timing(inputAnim, {
      toValue: inputValue ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (isFocused) {
      inputActiveAnim();
    } else {
      inputInactiveAnim();
    }
  }, [isFocused]);

  return (
    <View style={styles.inputContainer}>
      <Animated.Text
        style={[
          styles.placeholder,
          {
            top: inputAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-4, -24],
            }),
          },
          {
            fontSize: inputAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [18, 12],
            }),
          },
          {
            color: inputAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["#aaa", "#000"],
            }),
          },
        ]}
      >
        {placeholder}
      </Animated.Text>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.input}
        secureTextEntry={secureText && isHideSecureText}
        // onEndEditing={(text) => setInputValue(text)}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      {secureText ? (
        <Pressable
          onPressIn={() => setIsHideSecureText(false)}
          onPressOut={() => setIsHideSecureText(true)}
          hitSlop={{ bottom: 10, left: 5, right: 10, top: 10 }}
          style={styles.hideIconContainer}
        >
          <Image source={hideIcon} />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Input;
