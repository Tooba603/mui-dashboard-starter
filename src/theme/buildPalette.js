import { alpha } from "@mui/material/styles";
import basePalette from "./palette";

const GREY = basePalette.grey;

/** MUI palette for light mode (extends static tokens in `palette.jsx`). */
export function buildLightPalette() {
  return {
    mode: "light",
    ...basePalette,
  };
}

/** MUI palette for dark mode — keeps brand primaries, adjusts surfaces & text. */
export function buildDarkPalette() {
  return {
    mode: "dark",
    common: basePalette.common,
    primary: basePalette.primary,
    secondary: {
      ...basePalette.secondary,
      main: "#e0e0e0",
    },
    info: basePalette.info,
    success: basePalette.success,
    warning: basePalette.warning,
    error: basePalette.error,
    grey: GREY,
    divider: alpha(GREY[500], 0.2),
    text: {
      primary: "#F3F4F6",
      secondary: alpha("#fff", 0.65),
      disabled: alpha("#fff", 0.38),
    },
    background: {
      default: "#0B0F14",
      paper: "#12181F",
      neutral: "#1a222c",
    },
    action: {
      active: alpha("#fff", 0.56),
      hover: alpha("#fff", 0.08),
      selected: alpha("#fff", 0.16),
      disabled: alpha("#fff", 0.3),
      disabledBackground: alpha("#fff", 0.12),
      focus: alpha("#fff", 0.12),
      hoverOpacity: 0.08,
      disabledOpacity: 0.38,
    },
  };
}
