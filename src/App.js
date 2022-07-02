import React from "react";
import Home from "./Containers/HomePage/Home";
import "./App.scss";
import { MovieProvider } from "./MovieContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./Containers/MoviePage/MoviePage";
import Test from "./Containers/Test/Test";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Containers/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app__wrapper">
        <MovieProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie" element={<Home />} />
              <Route path="/movie/:id" element={<MoviePage />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </BrowserRouter>
        </MovieProvider>
      </div>
    </>
  );
};

export default App;
