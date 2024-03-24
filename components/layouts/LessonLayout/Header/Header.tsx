import React from "react";
import { Image, StyleSheet, View, Platform } from "react-native";
import Urls from "constants/urls";
import Texts from "constants/texts";
import ImageAspectRatios from "constants/ratios";
import H2 from "components/H2";

type Props = {

};

export default function Header(props: Props) {
  const {} = props;

  return (
    <View style={styles.root}>
      <Image
        alt="Лого"
        style={styles.logo}
        source={{
          uri: Urls.COMPANY_LOGO
        }}
      />
      <View style={styles.titleBox}>
        <H2>
          {Texts.LESSON_TITLE}
        </H2>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    minHeight: 100,
    ...Platform.select({
      web: {
        flexDirection: "row",
      }
    }),
  },
  logo: {
    aspectRatio: ImageAspectRatios.COMPANY_LOGO,
    resizeMode: "contain",
    maxHeight: 100,
    ...Platform.select({
      web: {
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        maxHeight: 300
      }
    })
  },
  titleBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
});
