import React, { useState } from "react";
import { UserCredentials } from "../../hooks/types";
import useUser from "../../hooks/useUser";

const App = () => {
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
        <label htmlFor="username"> </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleInputChange}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleInputChange}
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default App;
