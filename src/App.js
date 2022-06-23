import React from "react";
import Home from "./Containers/HomePage/Home";
import "./App.scss";
import { MovieProvider } from "./MovieContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Containers/Test/Test";

const App = () => {
  return (
    <div className="app__wrapper">
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test/:id" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </div>
  );
};

export default App;
