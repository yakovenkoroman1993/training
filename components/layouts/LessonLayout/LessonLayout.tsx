import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function LessonLayout(props: Props) {
  const { children } = props;

  return (
    <View style={styles.root}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    height: "100%",
  },
});
