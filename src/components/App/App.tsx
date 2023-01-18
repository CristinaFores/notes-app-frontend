import Login from "../Login/Login";
import { Route, Routes } from "react-router";
import Register from "../Register/Register";

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
