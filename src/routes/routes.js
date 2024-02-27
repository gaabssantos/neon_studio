import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
