import React from "react";
import { Routes, Route } from "react-router";

import Header from "./Components/HeaderComponents/Header";
import NoLimit from "./Components/NoLimitComponents";
import Footer from "./Components/FooterComponents";
import PeriodicServices from "./Components/PeriodicServicesComponents";
import Installation from "./Components/InstallationComponents";
import About from "./Components/AboutComponents";
// import Routescontainer from "./Components/RoutesContainer";

function App() {

  // const [flag, setFlag] = React.useState(false);
  // setFlag={() => setFlag(true)}

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header/>
        <Routes>
          <Route path="/" element={ <NoLimit /> }/>
          <Route path="/periodicServices" element={ <PeriodicServices /> }/>
          <Route path="/installation" element={ <Installation /> }/>
          <Route path="/about" element={ <About /> }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
