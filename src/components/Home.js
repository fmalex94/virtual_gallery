import React from "react";

import Galeria from "./Galeria";
import Hero from "./Hero";

//componente creado q contiene los componentes principales de "/"
const Home = () => {
  return (
    <>
      <Hero />
      <Galeria />
    </>
  );
};

export default Home;
