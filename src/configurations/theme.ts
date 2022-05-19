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
    brand: {
      primaryDark: ColorTheme.primaryDark,
      primaryDarkGray: ColorTheme.primaryDarkGray,
      secondaryGray: ColorTheme.secondaryGray,
      primaryGold: ColorTheme.primaryGold,
      primaryWhite: ColorTheme.primaryWhite,
    },
  },
  breakpoints: breakpoints,
  styles: {
    global: {
      'html, body': {
        backgroundColor: ColorTheme.primaryDark,
      },
      a: {
        color: ColorTheme.primaryWhite,
      },
    },
  },
}

// 3. extend the theme
export const theme = extendTheme({ config })
