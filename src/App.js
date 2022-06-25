import React from "react";
import Home from "./Containers/HomePage/Home";
import "./App.scss";
import { MovieProvider } from "./MovieContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./Containers/MoviePage/MoviePage";
import Test from "./Containers/Test/Test";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app__wrapper">
        <MovieProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MoviePage />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </BrowserRouter>
        </MovieProvider>
      </div>
    </>
  );
};

export default App;
