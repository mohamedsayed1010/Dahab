export const darkTokens = {
  gold: {
    50: "#FFF8E8",
    100: "#F8E7C0",
    200: "#EFD28D",
    300: "#DDB15A",
    400: "#C9963B",
    500: "#B37A1F",
    600: "#99641A",
    700: "#7D5118",
    800: "#5A3B15",
    900: "#38250F",
  },

  background: {
    DEFAULT: "#0F1115",
    muted: "#171A21",
    card: "#110F0A",
    navbar: "#12151B",
  },

  text: {
    primary: "#F8F7F3",
    secondary: "#C9C3B5",
    muted: "#8F8A7E",
  },

  border: {
    DEFAULT: "#2A2F3A",
    gold: "#5A3B15",
  },

  success: "#2EAF6D",
  warning: "#DDB15A",
  danger: "#E45757",
};

export const lightTokens = {
  gold: {
    50: "#FFF9F1",
    100: "#F8EED8",
    200: "#EED7A3",
    300: "#DDBA72",
    400: "#C89A4A",
    500: "#AF7A28",
    600: "#92641F",
    700: "#75501B",
    800: "#5A3E18",
    900: "#3D2B12",
  },

  background: {
    DEFAULT: "#FAF8F3",
    muted: "#F3EEE3",
    card: "#FFFFFF",
    navbar: "#FFFFFF",
  },

  text: {
    primary: "#24201A",
    secondary: "#61584B",
    muted: "#958A79",
  },

  border: {
    DEFAULT: "#E6DED0",
    gold: "#C89A4A",
  },

  success: "#2E7D32",
  warning: "#AF7A28",
  danger: "#C62828",
};

export const tokens = (mode) =>
  mode === "dark" ? darkTokens : lightTokens;