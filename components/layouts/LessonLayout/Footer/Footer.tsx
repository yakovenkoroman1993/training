import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "components/Button";
import { useLessons } from "components/layouts/TrainingLayout";

export default function Footer() {
  const {
    nextLesson,
    previousLesson,
    goToNextLesson,
    goToPreviousLesson,
  } = useLessons()

  return (
    <View style={styles.root}>
      {!previousLesson ? <View /> : (
        <Button
          title={previousLesson.title}
          onPress={goToPreviousLesson}
        />
      )}
      {!nextLesson ? (
        <Button
          title="Тестовое задание"
        />
      ) : (
        <Button
          title={nextLesson.title}
          onPress={goToNextLesson}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  }
})
