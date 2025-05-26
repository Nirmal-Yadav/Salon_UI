import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Content from "./pages/Content.jsx";
import Menu from "./pages/Menu.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/AboutUs.jsx";
import Membership from "./pages/Membership.jsx";
import Appointment from "./pages/Appointment.jsx";
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Content />} />
            <Route path="menu" element={<Menu />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="membership" element={<Membership />} />
            <Route path="appointment" element={<Appointment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
