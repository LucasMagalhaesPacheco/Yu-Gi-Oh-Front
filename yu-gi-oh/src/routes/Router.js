import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DuelTerminalPage from "../pages/duelTerminalPage/DuelTerminalPage";
import BrandedPage from "../pages/brandedPage/BrandedPage";
import WorldChalicepage from "../pages/WorldChalicePage/WorldChalicepage";
import GlobalStyle from "../GlobalStyle";
import {Header} from "../components/Header/Header";
import {Error} from "../components/Error/Error";

const Router = () => {
   return (
    <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
    <Route index exact default path="/" element={< HomePage />}/>
    <Route exact path="/DuelTerminal" element={<DuelTerminalPage />}/>
    <Route exact path="/WorldChalice" element={<WorldChalicepage />} />
    <Route exact path="/Branded" element={<BrandedPage />} />
    <Route exact path="*" element={<Error />}  />
    </Routes>
    </BrowserRouter>
   )
}

export default Router