import React from "react";
import { StyleSheet, View } from "react-native";
import Nav from "components/layouts/LessonLayout/Nav";
import Screens from "constants/screens";

type Props = {
  children: React.ReactNode;
};

export default function Main(props: Props) {
  const { children } = props;

  return (
    <View style={styles.root}>
      <Nav
        examinationRoute={Screens.EXAMINATION}
      />
      <View style={{ flexGrow: 1 }}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    flexGrow: 1,
    padding: 10,
  }
});
