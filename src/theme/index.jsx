import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import shadows from "./shadows";
import typography from "./typography";
import customShadows from "./customShadows";
import GlobalStyles from "./globalStyles";
import { buildDarkPalette, buildLightPalette } from "./buildPalette";

export default function ThemeProvider({ children }) {
  const mode = useSelector((state) => state.ui.mode);
  const theme = useMemo(() => {
    const palette = mode === "dark" ? buildDarkPalette() : buildLightPalette();

    const themeOptions = {
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows: shadows(mode),
      customShadows: customShadows(mode),
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              "&:focus": { outline: "none" },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              "&:focus": { outline: "none", boxShadow: "none" },
              "&:active": { outline: "none", boxShadow: "none" },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: { "&:focus": { outline: "none", boxShadow: "none" } },
          },
        },
      },
    };

    return createTheme(themeOptions);
  }, [mode]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
