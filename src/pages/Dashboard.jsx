import React from "react";
import Header from "./Header.jsx";

import Footer from "./Footer.jsx";
import "../css/Dashboard.css";
import Content from "./Content.jsx";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Dashboard;
