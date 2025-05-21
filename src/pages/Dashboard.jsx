import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
export default Dashboard;
