import * as styles from "./app.module.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";

export default function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <main className={[styles.content].join(" ")}>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}
