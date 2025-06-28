import React from "react";
import Home from "./Frontend/pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from "./Frontend/pages/Register";
import LoginPage from "./Frontend/pages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

