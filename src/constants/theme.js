import { extendTheme } from "native-base";

export const colors = {
  primaryColor: "#ef1778",
  secondaryColor: "#8626e0",
  tertiaryColor: "#CBD0FF",
  white: "#fff",
  black: "#000",
};

export const nativebaseTheme = extendTheme({
  colors: {
    primary: {
      50: "#ffbedb",
      100: "#ff96c5",
      200: "#fe6faf",
      300: "#f94d9a",
      400: "#f72585",
      500: "#ef1778",
      600: "#d8176e",
      700: "#bc1b63",
      800: "#a21e59",
      900: "#891f4f",
    },

    secondary: {
      50: "#dfbeff",
      100: "#cc9afb",
      200: "#b978f6",
      300: "#a558ed",
      400: "#9333ea",
      500: "#8626e0",
      600: "#7a25ca",
      700: "#6e28af",
      800: "#622996",
      900: "#55297f",
    },
  },
  fontConfig: {
    Manrope: {
      100: {
        normal: "manrope-light",
        italic: "manrope-light",
      },
      200: {
        normal: "manrope-light",
        italic: "manrope-light",
      },
      300: {
        normal: "manrope-light",
        italic: "manrope-light",
      },
      400: {
        normal: "manrope-light",
        italic: "manrope-light",
      },
      500: {
        normal: "manrope-light",
        italic: "manrope-light",
      },
      600: {
        normal: "manrope-regular",
        italic: "manrope-regular",
      },
      700: {
        normal: "manrope-regular",
        italic: "manrope-regular",
      },
      800: {
        normal: "manrope-semibold",
        italic: "manrope-semibold",
      },
      900: {
        normal: "manrope-semibold",
        italic: "manrope-semibold",
      },
    },
  },
  fonts: {
    heading: "Manrope",
    body: "Manrope",
    mono: "Manrope",
  },
});
