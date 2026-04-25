import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ThemeModeToggle from "../../../shared/components/ThemeModeToggle";

export default function TemplateShell({ children }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider", gap: 1, flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit", fontWeight: 700, minWidth: 160 }}
          >
            Vite + MUI starter
          </Typography>
          <Stack direction="row" spacing={0.5} alignItems="center" flexWrap="wrap" useFlexGap>
            <Button component={RouterLink} to="/" color="inherit" size="small">
              Home
            </Button>
            <Button component={RouterLink} to="/about" color="inherit" size="small">
              About
            </Button>
            {isAuthenticated ? (
              <Button component={RouterLink} to="/dashboard" color="inherit" size="small" variant="outlined">
                Dashboard
              </Button>
            ) : (
              <>
                <Button component={RouterLink} to="/login" color="inherit" size="small">
                  Login
                </Button>
                <Button component={RouterLink} to="/signup" color="inherit" size="small" variant="outlined">
                  Sign up
                </Button>
              </>
            )}
            <Button
              href="https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              size="small"
            >
              Upstream
            </Button>
            <ThemeModeToggle size="small" />
          </Stack>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 2.5,
          px: 2,
          mt: "auto",
          borderTop: 1,
          borderColor: "divider",
          bgcolor: (t) => (t.palette.mode === "dark" ? "background.paper" : "grey.50"),
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            Starter layout — replace with your product. Docs:{" "}
            <Link href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
              Vite
            </Link>
            {" · "}
            <Link href="https://react.dev" target="_blank" rel="noopener noreferrer">
              React
            </Link>
            {" · "}
            <Link href="https://mui.com/material-ui/" target="_blank" rel="noopener noreferrer">
              MUI
            </Link>
            .
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
