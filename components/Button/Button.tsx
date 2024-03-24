import React from "react";
import { Button as ButtonNative, ButtonProps } from "react-native";

type Props = ButtonProps & {

};

export default function Button(props: Props) {
  const {
    ...restProps
  } = props;

  return (
    <ButtonNative
      {...restProps}
    />
  );
}

