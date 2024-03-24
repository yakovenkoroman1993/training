import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import TrainingProvider from "./TrainingProvider";

type Props = {
  children: React.ReactNode;
};

export default function TrainingLayout(props: Props) {
  const { children } = props;

  const mockLessons = [
    {
      id: "lesson-1",
      title: "Урок 1"
    },
    {
      id: "lesson-2",
      title: "Урок 2"
    },{
      id: "lesson-3",
      title: "Урок 3"
    },
  ];

  return (
    <TrainingProvider
      training={{
        currentLesson: mockLessons[0],
        lessons: mockLessons
      }}
    >
      <SafeAreaView style={styles.root}>
        <View style={styles.content}>
          {children}
        </View>
      </SafeAreaView>
    </TrainingProvider>
  );
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
    width: "95%",
    height: "95%",
    backgroundColor: "white",
    minHeight: "50%"
  },
});
