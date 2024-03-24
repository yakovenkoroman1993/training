import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Theme from "constants/theme";
import HomeInstructions from "./HomeInstructions";
import Button from "components/Button";
import { useNavigation } from "@react-navigation/native";
import Screens from "constants/screens";
import TrainingLayout from "components/layouts/TrainingLayout";
import Texts from "constants/texts";
import Urls from "constants/urls";
import ImageAspectRatios from "constants/ratios";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <TrainingLayout>
      <View style={styles.logoBox}>
        <Image
          alt="Лого"
          style={styles.logo}
          source={{
            uri: Urls.COMPANY_LOGO
          }}
        />
      </View>
      <Text style={styles.title}>
        {Texts.WELCOME_TRAINING}
      </Text>
      <HomeInstructions style={{ flexGrow: 1 }} />
      <View style={{ alignSelf: "flex-end" }}>
        <Button
          title="Начать обучение"
          onPress={() => navigation.navigate(Screens.TRAINING)}
        />
      </View>
    </TrainingLayout>
  )
}

const styles = StyleSheet.create({
  logoBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: "25%",
    aspectRatio: ImageAspectRatios.COMPANY_LOGO,
  },
  title: {
    ...Theme.h2,
    textAlign: "center",
  }
});
