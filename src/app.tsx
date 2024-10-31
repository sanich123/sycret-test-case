import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "./app.module.scss";

export default function App() {
  return (
    <Router>
      <main>
        <AppRoutes />
      </main>
    </Router>
  );
}
