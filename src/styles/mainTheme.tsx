import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

export const mainTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: teal[500],
    },
    secondary: {
      main: "#ffd600",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
