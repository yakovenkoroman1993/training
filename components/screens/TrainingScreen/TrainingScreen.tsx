import React from "react";
import { Text } from "react-native";
import TrainingLayout from "components/layouts/TrainingLayout";
import LessonLayout from "components/layouts/LessonLayout";

export default function TrainingScreen() {
  return (
    <TrainingLayout>
      <LessonLayout>
        <Text>content</Text>
      </LessonLayout>
    </TrainingLayout>
  );
}
