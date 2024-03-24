import { ImageStyle, TextStyle, ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export type Style = ViewStyle | TextStyle | ImageStyle;

const defineStyle = (value: Style) => value;

const Theme = {
  flexColumn: defineStyle({
    display: "flex",
    flexDirection: "column",
  }),
  flexRow: defineStyle({
    display: "flex",
    flexDirection: "row",
  }),
  h1: defineStyle({
    fontSize: 23,
  }),
  h2: defineStyle({
    fontSize: 20,
  }),
  h3: defineStyle({
    fontSize: 18,
  })
} as const;

export default Theme;
