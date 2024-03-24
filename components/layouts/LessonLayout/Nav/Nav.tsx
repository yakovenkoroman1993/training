import React from "react";
import { StyleSheet, View, Text } from "react-native";
import H2 from "components/H2";
import { useNavigation } from "@react-navigation/native";
import { useLessons } from "components/layouts/TrainingLayout";
import { useTraining } from "components/layouts/TrainingLayout/TrainingProvider";

type Props = {
  examinationRoute: string;
};

export default function Nav(props: Props) {
  const {
    examinationRoute,
  } = props;

  const navigation = useNavigation();

  const { training } = useTraining();

  const { lessons, currentLesson } = training;

  const { goToLesson } = useLessons();

  return (
    <View style={styles.root}>
      <H2>Темы уроков:</H2>
      {lessons.map((lesson, idx) => (
        <H2
          key={idx}
          style={{
            fontWeight: currentLesson?.id === lesson.id ? "bold" : "normal"
          }}
          onPress={() => goToLesson(lesson)}
        >
          {lesson.title}
        </H2>
      ))}
      {lessons.length && (
        <Text>
          Уроки не найдены
        </Text>
      )}
      <H2
        onPress={
          () => navigation.navigate(examinationRoute as never)
        }
      >
        Тестовое задание
      </H2>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});
