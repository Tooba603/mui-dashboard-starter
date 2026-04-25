import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const schema = yup.object({
  fullName: yup.string().min(2, "Too short").required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  topic: yup.string().required("Choose a topic"),
  message: yup.string().min(20, "At least 20 characters").required("Required"),
});

const defaultValues = {
  fullName: "",
  email: "",
  topic: "",
  message: "",
};

export default function FormsDemoPage() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.info("Demo submit payload:", data);
  };

  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h1" fontWeight={700}>
        Forms & validation
      </Typography>
      <Typography color="text.secondary" maxWidth={720}>
        Uses <Typography component="span" fontFamily="monospace">react-hook-form</Typography> +{" "}
        <Typography component="span" fontFamily="monospace">yup</Typography> +{" "}
        <Typography component="span" fontFamily="monospace">@hookform/resolvers</Typography>. Same stack as auth screens; this page shows a
        slightly larger form with a <Typography component="span" fontFamily="monospace">Controller</Typography> for MUI{" "}
        <Typography component="span" fontFamily="monospace">
          Select
        </Typography>
        .
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2.5} maxWidth={560}>
          {isSubmitSuccessful ? (
            <Alert severity="success" onClose={() => reset(defaultValues)}>
              Validated and logged to the console — replace <Typography component="span" fontFamily="monospace">onSubmit</Typography> with an API
              call.
            </Alert>
          ) : null}
          <TextField label="Full name" fullWidth error={!!errors.fullName} helperText={errors.fullName?.message} {...register("fullName")} />
          <TextField label="Email" type="email" fullWidth error={!!errors.email} helperText={errors.email?.message} {...register("email")} />
          <FormControl fullWidth error={!!errors.topic}>
            <InputLabel id="topic-label">Topic</InputLabel>
            <Controller
              name="topic"
              control={control}
              render={({ field }) => (
                <Select labelId="topic-label" label="Topic" {...field}>
                  <MenuItem value="">
                    <em>Select…</em>
                  </MenuItem>
                  <MenuItem value="general">General</MenuItem>
                  <MenuItem value="support">Support</MenuItem>
                  <MenuItem value="billing">Billing</MenuItem>
                </Select>
              )}
            />
            {errors.topic ? <FormHelperText>{errors.topic.message}</FormHelperText> : null}
          </FormControl>
          <TextField
            label="Message"
            multiline
            minRows={4}
            fullWidth
            error={!!errors.message}
            helperText={errors.message?.message}
            {...register("message")}
          />
          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Button type="button" variant="outlined" onClick={() => reset(defaultValues)}>
              Reset
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
