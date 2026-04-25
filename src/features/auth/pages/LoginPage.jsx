import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Alert, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { loginSuccess } from "../../../redux/slices/userSlice";
import { loginSchema } from "../schemas/authSchemas";
import AuthPageLayout from "../components/AuthPageLayout";
import ThemeModeToggle from "../../../shared/components/ThemeModeToggle";
import { Box } from "@mui/material";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = typeof location.state?.from === "string" ? location.state.from : "/dashboard";
  const justRegistered = location.state?.registered;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 400));
    dispatch(
      loginSuccess({
        email: values.email,
        name: values.email.split("@")[0],
        token: "demo-jwt",
      })
    );
    navigate(from, { replace: true });
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <ThemeModeToggle />
      </Box>
      <AuthPageLayout title="Sign in" subtitle="Demo only — any valid form submits as a logged-in user.">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2.5}>
            {justRegistered ? (
              <Alert severity="success" variant="outlined">
                Account created (demo). Sign in below.
              </Alert>
            ) : null}
            <Alert severity="info" variant="outlined">
              Use any email and a password with 6+ characters. No real API call.
            </Alert>
            <TextField
              label="Email"
              type="email"
              autoComplete="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
            />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password")}
            />
            <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
              {isSubmitting ? "Signing in…" : "Sign in"}
            </Button>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              No account?{" "}
              <Link component={RouterLink} to="/signup" underline="hover">
                Create one
              </Link>
            </Typography>
            <Typography variant="body2" textAlign="center">
              <Link component={RouterLink} to="/" underline="hover">
                Back to marketing home
              </Link>
            </Typography>
          </Stack>
        </form>
      </AuthPageLayout>
    </Box>
  );
}
