import { useCallback } from "react";
import { useTraining } from "components/layouts/TrainingLayout/TrainingProvider";
import { Lesson } from "types/lesson";

export const useLessons  = () => {
  const { training, updateTraining } = useTraining();

  const { currentLesson, lessons } = training;

  const currentLessonIdx = lessons.findIndex((l) => l.id === currentLesson?.id);

  const previousLesson = lessons[currentLessonIdx - 1];

  const nextLesson = lessons[currentLessonIdx + 1];

  const goToNextLesson = useCallback(() => updateTraining((all) => ({
    ...all,
    currentLesson: nextLesson
  })), [nextLesson?.id]);

  const goToPreviousLesson = useCallback(() => updateTraining((all) => ({
    ...all,
    currentLesson: previousLesson
  })), [previousLesson?.id]);

  const goToLesson = useCallback((lesson: Lesson) => updateTraining((all) => ({
    ...all,
    currentLesson: lesson
  })), []);

  return {
    previousLesson,
    currentLesson,
    nextLesson,
    goToNextLesson,
    goToLesson,
    goToPreviousLesson,
  }
};
