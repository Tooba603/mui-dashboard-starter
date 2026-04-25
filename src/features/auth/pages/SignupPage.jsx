import { Link as RouterLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Alert, Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { signupSchema } from "../schemas/authSchemas";
import AuthPageLayout from "../components/AuthPageLayout";
import ThemeModeToggle from "../../../shared/components/ThemeModeToggle";

export default function SignupPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 500));
    navigate("/login", { replace: true, state: { registered: true } });
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <ThemeModeToggle />
      </Box>
      <AuthPageLayout title="Create account" subtitle="Validates with Yup; then redirects to sign in (no backend).">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2.5}>
            <Alert severity="info" variant="outlined">
              After submit you will land on login — wire onSubmit to your API.
            </Alert>
            <TextField label="Name" fullWidth error={!!errors.name} helperText={errors.name?.message} {...register("name")} />
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
              autoComplete="new-password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password")}
            />
            <TextField
              label="Confirm password"
              type="password"
              autoComplete="new-password"
              fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
            <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
              {isSubmitting ? "Creating…" : "Create account"}
            </Button>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Already registered?{" "}
              <Link component={RouterLink} to="/login" underline="hover">
                Sign in
              </Link>
            </Typography>
          </Stack>
        </form>
      </AuthPageLayout>
    </Box>
  );
}
