import React from 'react';
import { Routes, Route } from "react-router";

import NoLimit from "./NoLimitComponents";
import PeriodicServices from "./PeriodicServicesComponents";
import Installation from "./InstallationComponents";
import About from "./AboutComponents";

class Routescontainer extends React.Component ()  {

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={ <NoLimit/> }/>
                    <Route path="/periodicServices" element={ <PeriodicServices/> }/>
                    <Route path="/installation" element={ <Installation/> }/>
                    <Route path="/about" element={ <About/> }/>
                </Routes>
            </>
        );
    }
}

export default Routescontainer;
