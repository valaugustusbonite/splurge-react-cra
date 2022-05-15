import { extendTheme } from "@chakra-ui/react";

export const appTheme = extendTheme({
    colors: {
        appBlack: '#0D0B0D',
        appDarkGray: '#1F2124',
        appWhite: '#FFFFFF'
    },
    styles: {
        global: {
          'html, body': {
            backgroundColor: '#0D0B0D',
          },
          a: {
            color: 'teal.500',
          },
        },
      },
});