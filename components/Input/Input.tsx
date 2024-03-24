import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import merge from "lodash/merge";

type Props = TextInputProps & {

};

export default function (props: Props) {
  const {
    style,
    ...restProps
  } = props;

  return (
    <TextInput
      style={merge(styles.root, style)}
      {...restProps}
    />
  )
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
    padding: 10,
  },
});
