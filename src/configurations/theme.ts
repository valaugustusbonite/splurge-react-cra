import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { ColorTheme, ScreenBreakPoints } from './constants';

const breakpoints = createBreakpoints({
  sm: ScreenBreakPoints.sm,
  md: ScreenBreakPoints.md,
  lg: ScreenBreakPoints.lg,
  xl: ScreenBreakPoints.xl,
})

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    primaryDark: ColorTheme.primaryDark,
    primaryDarkGray: ColorTheme.primaryDarkGray,
    secondaryGray: ColorTheme.secondaryGray,
    primaryGold: ColorTheme.primaryGold,
    primaryWhite: ColorTheme.primaryWhite,
    secondaryDark: ColorTheme.secondaryDark,
  },
  breakpoints: breakpoints,
  styles: {
    global: {
      'html, body': {
        backgroundColor: ColorTheme.primaryDark,
      },
      '*': {
        margin: 0,
        padding: 0,
      },
      a: {
        color: ColorTheme.primaryWhite,
      },
    },
  },
}

// 3. extend the theme
export const theme = extendTheme(config)
