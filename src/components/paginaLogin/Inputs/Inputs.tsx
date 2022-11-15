import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

const InputEmail: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField fullWidth id="input-with-sx" label="With sx" variant="standard" />
    </Box>
  );
};

interface State {
  password?: string;
  showPassword?: boolean;
}

const InputPassword: React.FC = (password, showPassword) => {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export { InputEmail, InputPassword };
