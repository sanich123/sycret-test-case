import React from "react";
import { Routes as BrowserRoutes, Route } from "react-router-dom";
import { Routes } from "./const";
import Home from "../pages/Home/home";
import Page404 from "../pages/Page404/page404";
import Form from "../pages/Form/form";
import Success from "../pages/Success/success";

export default function AppRoutes() {
  return (
    <BrowserRoutes>
      <Route path={Routes.home} element={<Home />} />
      <Route path={Routes.form} element={<Form />} />
      <Route path={Routes.successPage} element={<Success />} />
      <Route path="*" element={<Page404 />} />
    </BrowserRoutes>
  );
}
