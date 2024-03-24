import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { Lesson } from "types/lesson";
import fp from "lodash/fp";

type State = {
  lessons: Lesson[];
  currentLesson: Lesson | null;
}

export type TrainingContextType = {
  training: State,
  updateTraining: Dispatch<SetStateAction<State>>
};

const defaultState: State = {
  lessons: [],
  currentLesson: null,
};

const TrainingContext = createContext<TrainingContextType>({
  training: defaultState,
  updateTraining: fp.noop
});

export const useTraining = () => useContext(TrainingContext);

type Props = {
  children: React.ReactNode;
  training?: State;
};

const TrainingProvider = (props: Props) => {
  const {
    children,
    training: defaultTraining
  } = props;

  const [
    training,
    updateTraining
  ] = useState(defaultTraining || defaultState);

  return (
    <TrainingContext.Provider
      value={{ training, updateTraining }}
    >
      {children}
    </TrainingContext.Provider>
  );
};

export default TrainingProvider;
