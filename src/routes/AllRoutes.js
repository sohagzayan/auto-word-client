import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AllRoutes = ({ show, setShow }) => {
  return (
    <Routes>
      <Route path="/" element={<Home show={show} setShow={setShow} />} />
    </Routes>
  );
};

export default AllRoutes;
