import React, { useState } from "react";
import { UserCredentials } from "../../hooks/types";
import useUser from "../../hooks/useUser";
import Button from "../Button/Button";
import Input from "../Input/Input";

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
    console.log(formDataToSubmit);
    await login(formDataToSubmit);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> </label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleInputChange}
          htmlFor="username"
          textLabel="Username"
        />

        <label></label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleInputChange}
          htmlFor="password"
          textLabel="Password"
        />

        <Button ariaLabel="Login" text="Login" />
      </form>
    </div>
  );
};

export default Login;
