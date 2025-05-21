import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <Main />
      <Section1 />
      <Section2 />
    </div>
  );
}
export default Dashboard;
