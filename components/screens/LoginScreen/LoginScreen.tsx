import React, { useState } from "react";
import Input from "components/Input";
import { SafeAreaView, View, Text } from "react-native";
import { StyleSheet, Platform } from 'react-native';
import Button from "components/Button";
import { useNavigation } from '@react-navigation/native';
import Screens from "constants/screens";
import Theme from "constants/theme";

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => navigation.navigate(Screens.HOME);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Авторизуйтесь, пожалуйста, чтобы начать обучение
        </Text>
        <Input
          keyboardType="email-address"
          placeholder="Укажите логин"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          secureTextEntry
          placeholder="Ваш пароль"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="Войти"
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    width: "25%",
    ...Platform.select({
      android: {
        width: "95%"
      },
      ios: {
        width: "95%"
      },
    })
  },
  title: {
    ...Theme.h1,
    textAlign: "center"
  }
});
