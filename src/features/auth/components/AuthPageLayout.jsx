import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";

export default function AuthPageLayout({ title, subtitle, children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 4,
        px: 2,
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={2} sx={{ mb: 3, textAlign: "center" }}>
          <Typography variant="h4" component="h1" fontWeight={700}>
            {title}
          </Typography>
          {subtitle ? (
            <Typography color="text.secondary" variant="body2">
              {subtitle}
            </Typography>
          ) : null}
        </Stack>
        <Card elevation={0} variant="outlined">
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>{children}</CardContent>
        </Card>
      </Container>
    </Box>
  );
}
