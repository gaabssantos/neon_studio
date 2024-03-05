import { Routes, Route } from "react-router-dom";

import Home from "../containers/Home";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/esportes" element={<Home />} />
    </Routes>
  );
};

export default RoutesApp;
