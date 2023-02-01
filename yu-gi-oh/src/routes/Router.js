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
import FirstEraCards from "../pages/duelTerminalPage/firstEra/firstEraCards/FirstEraCards";
import CardsSecondEra from "../pages/duelTerminalPage/secondEra/cardsSecondEra/CardsSecondEra";

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
    <Route exact path="/DuelTerminal/FirstAge" element={<FirstEra />}/>
    <Route exact path="/DuelTerminal/FirstAge/:name" element={<FirstEraCards />}/>
    <Route exact path="/DuelTerminal/SecondAge" element={<SecondEra />}/>
    <Route exact path="/DuelTerminal/SecondAge/:name" element={<CardsSecondEra />} />
    <Route exact path="/DuelTerminal/ThirdAge" element={<ThirdAge />} />
    <Route exact path="/Details/:id" element={<Details />}/>
    </Routes>
    </BrowserRouter>
   )
}

export default Router