import React from "react";
import { View, Text } from "react-native";
import Theme, { Style } from "constants/theme";

type Props = {
  style?: Style;
};

export default function HomeInstructions(props: Props) {
  const { style } = props;

  return (
    <View
      style={{
        ...style,
        ...Theme.flexColumn,
        padding: 10
      }}
    >
      <Text style={{ ...Theme.h3 }}>Инструкция:</Text>
      <Text style={{ ...Theme.h3 }}>Шаг 1</Text>
      <Text style={{ ...Theme.h3 }}>Шаг 2</Text>
    </View>
  )
}
