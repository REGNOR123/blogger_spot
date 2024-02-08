import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { About } from "./Component/About/About";
import { Contacts } from "./Component/Contacts/Contacts";
import { Header } from "./Dashboard/Header/Header";
import { Home } from "./Dashboard/Home/Home"
// import { MainFeaturedPost } from "./Component/Home/MainPost/MainFeaturedPost";
// import { Maincontainer } from "./Dashboard/MainContainer/Maincontainer";


export const Routers=()=>{
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = '/home' element={<Home/>} />
            <Route path = '/about' element={<About/>} />
            <Route path = '/contacts' element={<Contacts/>} />
        </Routes>
        </BrowserRouter>
        
        </>
    );
}