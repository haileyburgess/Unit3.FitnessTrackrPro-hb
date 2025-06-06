import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar.jsx";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import Layout from "./layout/Layout.jsx";
import SingleActivityPage from "./activities/SingleActivityPage.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Layout />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/activities/:id" element={<SingleActivityPage />} />
      </Routes>
    </>
  );
}
