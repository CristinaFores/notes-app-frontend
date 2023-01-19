import Login from "../Login/Login";
import { Route, Routes } from "react-router";
import Register from "../Register/Register";
import Header from "../Header/Header";

const App = (): JSX.Element => {
  return (
    <div>
      <Header title={"Book Notes"} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
