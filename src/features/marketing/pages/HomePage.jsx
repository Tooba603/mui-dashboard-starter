import { Link as RouterLink } from "react-router-dom";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TemplateShell from "../layouts/TemplateShell";

const DOC_LINKS = [
  { label: "Vite", href: "https://vite.dev/guide/", description: "Config, env, build" },
  { label: "React", href: "https://react.dev/learn", description: "Components & hooks" },
  { label: "MUI", href: "https://mui.com/material-ui/getting-started/", description: "Layout, inputs, theming" },
  { label: "React Router", href: "https://reactrouter.com/", description: "URLs & navigation" },
  { label: "Emotion", href: "https://mui.com/material-ui/integrations/interoperability/#emotion", description: "Used by MUI for styles" },
];

const GUIDE_STEPS = [
  {
    title: "Run the app",
    body: "From the project root run npm install, then npm run dev. Port defaults are set in vite.config.js (e.g. 3000).",
  },
  {
    title: "Explore the template",
    body: "Try Login (demo, no API), Dashboard (sidebar + samples), dark/light toggle in the header, and API / form examples under Dashboard.",
  },
  {
    title: "Feature-based folders",
    body: "Add product code under src/features/<name>/ with pages/, components/, and optional api/ or schemas/. Keep cross-cutting pieces in src/core and src/shared.",
  },
  {
    title: "Theme & modes",
    body: "Light/dark is stored in Redux (ui slice) and persisted. Adjust tokens in src/theme/ — see buildPalette.js for dark overrides.",
  },
  {
    title: "Routes & auth",
    body: "Central routes live in src/app/routes.jsx. Protected areas use shared/components/RequireAuth.jsx wrapping the dashboard layout.",
  },
  {
    title: "Ship a build",
    body: "Run npm run build and deploy dist/. Use npm run preview to test the production bundle.",
  },
];

const KEY_PATHS = [
  "src/app/routes.jsx — route table",
  "src/features/auth — login / signup UI",
  "src/features/dashboard — shell + demo pages",
  "src/features/marketing — public landing",
  "src/core/api — Axios clients",
  "src/redux — user + theme mode (persist)",
  "src/theme — MUI theme",
];

export default function HomePage() {
  return (
    <TemplateShell>
      <Stack spacing={4}>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
            <Chip label="Starter template" color="primary" variant="outlined" size="small" />
            <Chip label="Auth + dashboard included" size="small" variant="filled" />
          </Stack>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, maxWidth: 900 }}>
            React + Vite + MUI — structured starter
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 720, fontWeight: 400 }}>
            Marketing shell, demo auth, dashboard layout, API + form examples, and persisted light/dark mode — organized by feature folders.
          </Typography>
        </Box>

        <Alert severity="info" variant="outlined">
          <strong>Try it:</strong>{" "}
          <Button component={RouterLink} to="/login" size="small" sx={{ verticalAlign: "baseline", p: 0, minWidth: 0 }}>
            Login
          </Button>{" "}
          (any valid fields) opens the{" "}
          <Button component={RouterLink} to="/dashboard" size="small" sx={{ verticalAlign: "baseline", p: 0, minWidth: 0 }}>
            Dashboard
          </Button>
          .{" "}
          <Button component={RouterLink} to="/about" size="small" sx={{ verticalAlign: "baseline", p: 0, minWidth: 0 }}>
            About
          </Button>{" "}
          is a second public page.
        </Alert>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            alignItems: "start",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(280px, 340px)" },
          }}
        >
          <Stack spacing={3}>
            <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <ArticleOutlinedIcon color="primary" />
                <Typography variant="h5" component="h2">
                  Project guide
                </Typography>
              </Stack>
              <Typography color="text.secondary" paragraph sx={{ mb: 2 }}>
                Use this page as onboarding for new teammates, then delete or replace it when the real marketing site ships.
              </Typography>
              <List disablePadding>
                {GUIDE_STEPS.map((step, index) => (
                  <Box key={step.title}>
                    {index > 0 ? <Divider component="li" sx={{ my: 2 }} /> : null}
                    <ListItem alignItems="flex-start" disablePadding sx={{ display: "block" }}>
                      <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                        Step {index + 1}
                      </Typography>
                      <ListItemText
                        primary={step.title}
                        secondary={step.body}
                        primaryTypographyProps={{ variant: "subtitle1", fontWeight: 600, gutterBottom: true }}
                        secondaryTypographyProps={{ variant: "body2", color: "text.secondary" }}
                      />
                    </ListItem>
                  </Box>
                ))}
              </List>
            </Paper>
          </Stack>

          <Stack spacing={3}>
            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  <LaunchOutlinedIcon fontSize="small" color="action" />
                  <Typography variant="subtitle1" fontWeight={700}>
                    Starter links
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Official docs you will open repeatedly while building.
                </Typography>
                <List dense disablePadding>
                  {DOC_LINKS.map((item) => (
                    <ListItem key={item.href} disablePadding sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <LaunchOutlinedIcon fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Link href={item.href} target="_blank" rel="noopener noreferrer" underline="hover" fontWeight={600}>
                            {item.label}
                          </Link>
                        }
                        secondary={item.description}
                        primaryTypographyProps={{ variant: "body2" }}
                        secondaryTypographyProps={{ variant: "caption" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  <FolderOpenOutlinedIcon fontSize="small" color="action" />
                  <Typography variant="subtitle1" fontWeight={700}>
                    Where things live
                  </Typography>
                </Stack>
                <List dense disablePadding>
                  {KEY_PATHS.map((line) => (
                    <ListItem key={line} disablePadding sx={{ py: 0.35, alignItems: "flex-start" }}>
                      <ListItemIcon sx={{ minWidth: 32, mt: 0.25 }}>
                        <RouteOutlinedIcon fontSize="small" color="disabled" />
                      </ListItemIcon>
                      <ListItemText primary={line} primaryTypographyProps={{ variant: "body2", fontFamily: "monospace", fontSize: "0.8rem" }} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card
              variant="outlined"
              sx={{
                bgcolor: (t) => (t.palette.mode === "dark" ? "grey.900" : "grey.50"),
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <PaletteOutlinedIcon fontSize="small" color="action" />
                  <Typography variant="subtitle1" fontWeight={700}>
                    Theming tip
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Prefer changing <Typography component="span" fontFamily="monospace">src/theme/palette.jsx</Typography> and{" "}
                  <Typography component="span" fontFamily="monospace">buildPalette.js</Typography> over one-off sx colors so light and dark stay
                  aligned.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Stack>
    </TemplateShell>
  );
}
