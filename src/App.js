// prettier-ignore

import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/Authentication/Authentication.component.jsx";

const Shop = () => {
  return <h1>Hi, this is the shop page.</h1>;
};

const App = () => {
  const [path, setPath] = useState();
  useEffect(() => {
    fetch();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
