import { Link as RouterLink } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import TemplateShell from "../layouts/TemplateShell";

export default function AboutPage() {
  return (
    <TemplateShell>
      <Stack spacing={2} sx={{ maxWidth: 640 }}>
        <Typography variant="overline" color="primary">
          Marketing feature
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          About this placeholder
        </Typography>
        <Typography color="text.secondary" paragraph>
          Public pages live under <Typography component="span" fontFamily="monospace">src/features/marketing/</Typography>. Authenticated product UI
          lives under <Typography component="span" fontFamily="monospace">src/features/dashboard/</Typography> and is registered in{" "}
          <Typography component="span" fontFamily="monospace">
            src/app/routes.jsx
          </Typography>
          .
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" sx={{ alignSelf: "flex-start" }}>
          Back to home
        </Button>
      </Stack>
    </TemplateShell>
  );
}
