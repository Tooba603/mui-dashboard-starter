import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";

export default function DashboardHomePage() {
  const user = useSelector((state) => state.user.user);

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          Overview
        </Typography>
        <Typography color="text.secondary" maxWidth={640}>
          You are inside the <Typography component="span" fontFamily="monospace">DashboardLayout</Typography>: sidebar + top app bar +{" "}
          <Typography component="span" fontFamily="monospace">
            Outlet
          </Typography>{" "}
          for nested routes. Replace navigation items in{" "}
          <Typography component="span" fontFamily="monospace">
            features/dashboard/components/DashboardLayout.jsx
          </Typography>
          .
        </Typography>
      </Box>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Session (Redux + persist)
          </Typography>
          <Typography variant="body1">
            Signed in as <strong>{user.email}</strong>
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
            <Button component={RouterLink} to="/dashboard/api-demo" variant="contained" size="small">
              API example
            </Button>
            <Button component={RouterLink} to="/dashboard/forms" variant="outlined" size="small">
              Form example
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
