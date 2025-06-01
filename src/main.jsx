import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./layout/Layout";

import { AuthProvider } from "./auth/AuthContext";
import { ApiProvider } from "./api/ApiContext";
import { BrowserRouter } from "react-router";
import Navbar from "./layout/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApiProvider>
      <BrowserRouter>
      <Navbar>
      <Layout>
          <App />
      </Layout>
      </Navbar>
      </BrowserRouter>
    </ApiProvider>
  </AuthProvider>
);
