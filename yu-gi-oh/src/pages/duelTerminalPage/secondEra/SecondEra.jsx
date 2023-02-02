import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonConstelar, ButtonEvilswarm, ButtonGemKnight, ButtonGishiki, ButtonGusto, ButtonLaval, ButtonSteelWarm, ButtonVylon, SecondAgeButtons, SecondAgeContainer } from './styled'
import { goToSecondAgeCards } from '../../../routes/coordinator'
import DuelTerminal from '../../../Assets/DuelTerminalSecondAge.png'
const SecondEra = () => {
  const navigate = useNavigate()
  return (
  <SecondAgeContainer>
    <img src={DuelTerminal} alt="​​Messier 7 Pleiades" />
    <SecondAgeButtons>
    <ButtonLaval onClick={() => goToSecondAgeCards(navigate, "Laval")}>Laval</ButtonLaval>
    <ButtonGemKnight onClick={() => goToSecondAgeCards(navigate, "Gem-")}>Gem-Knight</ButtonGemKnight>
    <ButtonGusto onClick={() =>  goToSecondAgeCards(navigate, "Gusto")}>Gusto</ButtonGusto>
    <ButtonGishiki onClick={() => goToSecondAgeCards(navigate, "Gishki")}>Gishki</ButtonGishiki>
    </SecondAgeButtons>
    <SecondAgeButtons>
    <ButtonSteelWarm onClick={() => goToSecondAgeCards(navigate, "Steelswarm ")}>Steelswarm</ButtonSteelWarm>
    <ButtonVylon onClick={() => goToSecondAgeCards(navigate, "Vylon")}>Vylon</ButtonVylon>
    <ButtonEvilswarm onClick={() => goToSecondAgeCards(navigate, "Lswarm")}>Evilswarm</ButtonEvilswarm>
    <ButtonConstelar onClick={() => goToSecondAgeCards(navigate, "Constellar")}>Constellar</ButtonConstelar>
    </SecondAgeButtons>
  </SecondAgeContainer>
   
  )
}

export default SecondEra