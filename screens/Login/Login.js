import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, SafeAreaView, Text, Pressable, Keyboard, Animated, Easing, ImageBackground } from "react-native";
import Form from "./Form/Form";

const background = require("../../assets/pictures/blue-wibe.png");

const Login = () => {
  const [iskKeyboardActive, setIskKeyboardActive] = useState(undefined);
  const inputAnim = useRef(new Animated.Value(0)).current;

  const inputActiveAnim = () => {
    Animated.timing(inputAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.out(Easing.exp),
    }).start();
  };

  const inputInactiveAnim = () => {
    Animated.timing(inputAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIskKeyboardActive(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIskKeyboardActive(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (iskKeyboardActive) {
      inputActiveAnim();
    } else {
      inputInactiveAnim();
    }
  }, [iskKeyboardActive]);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={{ flex: 1 }} onPressIn={() => Keyboard.dismiss()}>
        <View>
          <Animated.View
            style={{
              marginTop: inputAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["20%", "4%"],
              }),
            }}
          >
            <Text style={styles.title}>Добро пожаловать!</Text>
            <Text style={styles.subtitle}>Введите данные вашего аккаунта</Text>
            <Form />
          </Animated.View>
        </View>
        <ImageBackground style={styles.blueBackground} source={background} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F8F8F8",
  },
  title: {
    marginLeft: "10%",
    marginBottom: "2%",
    fontSize: 32,
    fontWeight: "800",
  },
  subtitle: {
    marginLeft: "10%",
    marginBottom: "14%",
    fontSize: 22,
    fontWeight: "400",
    color: "#5c5c5c",
  },
  formContainer: {
    marginTop: "20%",
  },
  blueBackground: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 220,
  },
});

export default Login;
