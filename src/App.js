import React from "react";
import AllCreators from "./components/AllCreators";
import { Routes,Route,Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import DonateCreator from "./components/DonateCreator";
import Donations from "./components/Donations";

const App = ()=>{
    const {darkMode} = useSelector(state=>state.darkMode)
    const color = darkMode ? '#fff' : '#000';
    const backgroundColor = darkMode ? '#000' : '#fff';

    return <Box sx={{color:{color},bgcolor:{backgroundColor}}}>
        <Routes>
            <Route path="/" element={<Navigate to='/all-creators'/>} />
            <Route path='/all-creators' element={<AllCreators />} exact />
            <Route path="/all-creators/:id" element={<DonateCreator />} />
            <Route path="/all-donations" element={<Donations />} />
        </Routes>
    </Box>
}

export default App;