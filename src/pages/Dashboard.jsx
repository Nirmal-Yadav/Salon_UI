import React from "react";
import Header from "./Header.jsx";

import Footer from "./Footer.jsx";
import "../css/Dashboard.css";
import Content from "./Content.jsx";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default Dashboard;
