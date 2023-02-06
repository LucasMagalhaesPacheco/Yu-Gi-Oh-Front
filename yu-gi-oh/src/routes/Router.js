import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DuelTerminalPage from "../pages/duelTerminalPage/DuelTerminalPage";
import BrandedPage from "../pages/brandedPage/BrandedPage";
import WorldChalicepage from "../pages/WorldChalicePage/WorldChalicepage";
import GlobalStyle from "../GlobalStyle";
import {Header} from "../components/Header/Header";
import {Error} from "../components/Error/Error";
import FirstEra from "../pages/duelTerminalPage/firstEra/FirstEra";
import SecondEra from "../pages/duelTerminalPage/secondEra/SecondEra";
import ThirdAge from "../pages/duelTerminalPage/thirdAge/ThirdAge";
import Details from "../pages/Details/Details";
import AgeCards from "../pages/duelTerminalPage/AgeCards/AgeCards";
import WorldChaliceCards from "../pages/WorldChalicePage/WorldChaliceCards/WorldChaliceCards";



const Router = () => {
   return (
    <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
    <Route index exact default path="/" element={< HomePage />}/>
    <Route exact path="/DuelTerminal" element={<DuelTerminalPage />}/>
    <Route exact path="/WorldChalice" element={<WorldChalicepage />} />
    <Route exact path="/WorldChalice/:name" element={<WorldChaliceCards />}/>
    <Route exact path="/Branded" element={<BrandedPage />} />
    <Route exact path="*" element={<Error />}  />
    <Route exact path="/DuelTerminal/FirstAge" element={<FirstEra />}/>
    <Route exact path="/DuelTerminal/:age/:name" element={<AgeCards />}/>
    <Route exact path="/DuelTerminal/SecondAge" element={<SecondEra />}/>
    <Route exact path="/DuelTerminal/ThirdAge" element={<ThirdAge />} />
    <Route exact path="/Details/:id" element={<Details />}/>
    </Routes>
    </BrowserRouter>
   )
}

export default Router