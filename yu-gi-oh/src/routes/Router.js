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
import AllyOfJustice from "../pages/duelTerminalPage/firstEra/AllyOfJustice/AllyOfJustice";
import Flabled from "../pages/duelTerminalPage/firstEra/Fabled/Flabled";
import Flamvell from "../pages/duelTerminalPage/firstEra/Flamvell/Flamvell";
import Genex from "../pages/duelTerminalPage/firstEra/Genex/Genex";
import IceBarrier from "../pages/duelTerminalPage/firstEra/IceBarrier/IceBarrier";
import Jurrac from "../pages/duelTerminalPage/firstEra/Jurrac/Jurrac";
import MistValley from "../pages/duelTerminalPage/firstEra/MistValley/MistValley";
import Naturia from "../pages/duelTerminalPage/firstEra/Naturia/Naturia";
import Worms from "../pages/duelTerminalPage/firstEra/Worms/Worms";
import XSaber from "../pages/duelTerminalPage/firstEra/X-Saber/XSaber";
import Details from "../pages/Details/Details";

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
    <Route exact path="/DuelTerminal/FirstAge/AllyOfJustice" element={<AllyOfJustice />} />
    <Route exact path="/DuelTerminal/FirstAge/Fabled" element={< Flabled />}/>
    <Route exact path="/DuelTerminal/FirstAge/Flamvell" element={<Flamvell />}/>
    <Route exact path="/DuelTerminal/FirstAge/Genex" element={< Genex />} />
    <Route exact path="/DuelTerminal/FirstAge/:name" element={<IceBarrier />}/>
    <Route exact path="/DuelTerminal/FirstAge/Jurrac" element={<Jurrac />}/>
    <Route exact path="/DuelTerminal/FirstAge/MistValley" element={<MistValley />}/>
    <Route exact path="/DuelTerminal/FirstAge/Naturia"  element={<Naturia />}/>
    <Route exact path="/DuelTerminal/FirstAge/Worms" element={<Worms />}/>
    <Route exact path="/DuelTerminal/FirstAge/XSaber" element={<XSaber />} />
    <Route exact path="/DuelTerminal/SecondAge" element={<SecondEra />}/>
    <Route exact path="/DuelTerminal/ThirdAge" element={<ThirdAge />} />
    <Route exact path="/Details/:id" element={<Details />}/>
    </Routes>
    </BrowserRouter>
   )
}

export default Router