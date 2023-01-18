import React, { useState } from "react";
import { UserCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import Container from "@mui/material/Container";
import { Box, TextField, Grid, Link } from "@mui/material";
import { ColorButton } from "../Button/ButtonStyled";

const Login = () => {
  const { login } = useUser();

  const intialFormData: UserCredentials = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };

    await login(formDataToSubmit);
  };
  return (
    <div>
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style)": { m: 2 },
          }}
        >
          <TextField
            id="username"
            name="username"
            label="Username"
            type="text"
            fullWidth
            required
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            fullWidth
            required
            autoFocus
            onChange={handleInputChange}
          />

          <ColorButton size="large" fullWidth variant="contained" type="submit">
            Login
          </ColorButton>
          <Grid item>
            <Link href="/register" variant="body1">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
