import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors: {
    primary: "#28282f",
    secondary: "#27374D",
  },
});

export default theme;
