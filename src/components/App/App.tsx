import Login from "../Login/Login";
import { Route, Routes } from "react-router";
import Register from "../Register/Register";
import Header from "../Header/Header";
import ListNotes from "../ListNotes/ListNotes";

const App = (): JSX.Element => {
  return (
    <div>
      <Header title={"Note Book"} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ListNotes />} />
      </Routes>
    </div>
  );
};

export default App;
