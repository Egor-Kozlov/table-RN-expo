import React from "react";
import { View, Text } from "react-native";
import Input from "../Input/Input";
import styles from "./styles";

const Form = () => {
  return (
    <View style={styles.container}>
      <Input placeholder={"Ваш логин"} secureText={false} />
      <Input placeholder={"Пароль"} secureText={true} />
      <View style={styles.circle}>
        <Text style={{ color: "white" }}>Войти</Text>
      </View>
    </View>
  );
};

export default Form;
