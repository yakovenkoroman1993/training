import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from "constants/screens";
import LoginScreen from "components/screens/LoginScreen";
import HomeScreen from "components/screens/HomeScreen";
import TrainingScreen from "components/screens/TrainingScreen";
import ExaminationScreen from "components/screens/ExaminationScreen";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.TRAINING}>
        <Stack.Screen
          name={Screens.LOGIN}
          component={LoginScreen}
          options={{
            title: "Страница авторизации"
          }}
        />
        <Stack.Screen
          name={Screens.HOME}
          component={HomeScreen}
          options={{
            title: "Начало Обучения"
          }}
        />
        <Stack.Screen
          name={Screens.TRAINING}
          component={TrainingScreen}
          options={{
            title: "Обучение"
          }}
        />
        <Stack.Screen
          name={Screens.EXAMINATION}
          component={ExaminationScreen}
          options={{
            title: "Тестовое задание"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
