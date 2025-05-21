import React from "react";
import Header from "./Header";
import Main from "./main";
import Section1 from "./Section1";
import Section2 from "./Section2";

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
