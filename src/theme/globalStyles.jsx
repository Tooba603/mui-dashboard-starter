import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          minHeight: "100%",
        },

        "::-webkit-scrollbar": {
          width: "8px",
          height: "4px",
        },

        "::-webkit-scrollbar-track": {
          background: "transparent",
        },

        "::-webkit-scrollbar-thumb": {
          backgroundColor: "grey",
          borderRadius: "20px",
        },

        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset !important",
            WebkitTextFillColor: "#000 !important",
            transition: "background-color 5000s ease-in-out 0s",
          },
          "&:-webkit-autofill:hover": {
            WebkitBoxShadow: "0 0 0 1000px white inset !important",
            WebkitTextFillColor: "#000 !important",
          },
          "&:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 1000px white inset !important",
            WebkitTextFillColor: "#000 !important",
          },
          "&:-webkit-autofill:active": {
            WebkitBoxShadow: "0 0 0 1000px white inset !important",
            WebkitTextFillColor: "#000 !important",
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
      }}
    />
  );

  return inputGlobalStyles;
}
