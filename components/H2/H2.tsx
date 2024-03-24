import React from "react";
import Theme from "constants/theme";
import merge from "lodash/merge";
import { Text, TextProps } from "react-native";


type Props = TextProps & {

};

export default function H2(props: Props) {
  const {
    style,
    ...restProps
  } = props;

  return (
    <Text
      style={merge({}, Theme.h2, style)}
      {...restProps}
    />
  );
}
