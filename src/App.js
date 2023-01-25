import { Route, Routes } from "react-router-dom";
import "./App.css";
import Getimage from "./components/getimage/Getimage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddPost from "./components/Uploads/Upload";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<AddPost />} />
        {/* <Route path="/getimage" element={<Getimage />} /> */}

      </Routes>
    </div>
  );
}

export default App;
