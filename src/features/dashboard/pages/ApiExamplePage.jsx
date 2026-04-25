import { useEffect, useState } from "react";
import { Alert, Box, Card, CardContent, CircularProgress, Link, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { apiClient } from "../../../core/api/client";
import { fetchExamplePosts } from "../../../core/api/jsonPlaceholder";

export default function ApiExamplePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [backendProbe, setBackendProbe] = useState(() =>
    import.meta.env.VITE_API_URL
      ? null
      : { ok: false, message: "Set VITE_API_URL to try your real backend." }
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchExamplePosts(6);
        if (!cancelled) setPosts(data);
      } catch (e) {
        if (!cancelled) setError(e?.message || "Request failed");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL;
    if (!base) return;
    let cancelled = false;
    (async () => {
      try {
        await apiClient.get("/", { validateStatus: () => true });
        if (!cancelled) {
          setBackendProbe({
            ok: true,
            message: "GET / against your base URL returned a response (any status). Adjust path in core/api usage.",
          });
        }
      } catch (e) {
        if (!cancelled) setBackendProbe({ ok: false, message: e?.message || "Request failed" });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h1" fontWeight={700}>
        API integration
      </Typography>
      <Typography color="text.secondary" maxWidth={720}>
        <Typography component="span" fontFamily="monospace">
          src/core/api/client.js
        </Typography>{" "}
        is an Axios instance using <Typography component="span" fontFamily="monospace">VITE_API_URL</Typography> and attaching{" "}
        <Typography component="span" fontFamily="monospace">
          Authorization
        </Typography>{" "}
        from Redux. Below, JSONPlaceholder demonstrates a public API shape unrelated to your base URL.
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Public API (JSONPlaceholder)
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Implemented in{" "}
            <Typography component="span" fontFamily="monospace">
              src/core/api/jsonPlaceholder.js
            </Typography>
            .
          </Typography>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
              <CircularProgress size={32} />
            </Box>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <List dense disablePadding>
              {posts.map((p) => (
                <ListItem key={p.id} disableGutters sx={{ py: 0.5 }}>
                  <ListItemText primary={p.title} secondary={`Post #${p.id}`} primaryTypographyProps={{ variant: "body2" }} />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Your backend (<Typography component="span" fontFamily="monospace">apiClient</Typography>)
          </Typography>
          {backendProbe ? (
            <Alert severity={backendProbe.ok ? "success" : "info"} variant="outlined">
              {backendProbe.message}
            </Alert>
          ) : (
            <CircularProgress size={24} />
          )}
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Docs:{" "}
            <Link href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer">
              Axios
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
