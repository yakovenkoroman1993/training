import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1192,
} as const;

export type Responsive = Record<
  "only" | "down" | "up",
  Record<keyof typeof breakpoints, boolean>
>;

export const useResponsive = (): Responsive => {
  return {
    only: {
      sm: useMediaQuery({
        maxWidth: breakpoints.md - 1,
      }),
      md: useMediaQuery({
        minWidth: breakpoints.md,
        maxWidth: breakpoints.lg - 1,
      }),
      lg: useMediaQuery({
        minWidth: breakpoints.lg,
        maxWidth: breakpoints.xl - 1,
      }),
      xl: useMediaQuery({
        minWidth: breakpoints.xl,
      }),
    },
    down: {
      sm: useMediaQuery({ maxWidth: breakpoints.sm - 1 }),
      md: useMediaQuery({ maxWidth: breakpoints.md - 1 }),
      lg: useMediaQuery({ maxWidth: breakpoints.lg - 1 }),
      xl: useMediaQuery({ maxWidth: breakpoints.xl - 1 }),
    },
    up: {
      sm: useMediaQuery({ minWidth: breakpoints.sm }),
      md: useMediaQuery({ minWidth: breakpoints.md }),
      lg: useMediaQuery({ minWidth: breakpoints.lg }),
      xl: useMediaQuery({ minWidth: breakpoints.xl }),
    },
  };
};

export const useResponsiveMatch = (
  matcher: (breakpoint: Responsive) => boolean
) => {
  const [matched, setMatched] = useState(false);

  const responsive = useResponsive();

  useEffect(
    () => setMatched(matcher(responsive)),
    [setMatched, matcher(responsive)]
  );

  return matched;
};

export const useMobile = () => useResponsiveMatch(({ down }) => down.sm);
