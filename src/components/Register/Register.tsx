import { Container } from "@mui/system";
import { Box, TextField, Grid, Link } from "@mui/material";
import { ColorButton } from "../Button/ButtonStyled";
import { RegisterData } from "../../hooks/useUser/types";
import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";

const App = (): JSX.Element => {
  const { register } = useUser();

  const intialFormData: RegisterData = {
    username: "",
    password: "",
    email: "",
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

  const sendUsers = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: RegisterData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    await register(formDataToSubmit);
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={sendUsers}
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
            id="email"
            name="email"
            label="Email"
            type="email"
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
            Register
          </ColorButton>
          <Grid item>
            <Link href="/login" variant="body1">
              {"Do you already have an account? Get in"}
            </Link>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default App;
