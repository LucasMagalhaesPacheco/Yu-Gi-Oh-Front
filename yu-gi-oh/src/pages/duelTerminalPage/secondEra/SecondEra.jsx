import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonConstelar, ButtonEvilswarm, ButtonGemKnight, ButtonGishiki, ButtonGusto, ButtonLaval, ButtonSteelWarm, ButtonVylon, SecondAgeButtons, SecondAgeContainer } from './styled'
import { goToAgeCards } from '../../../routes/coordinator'
import DuelTerminal from '../../../Assets/DuelTerminalSecondAge.png'
const SecondEra = () => {
  const navigate = useNavigate()
  const age = "SecondAge"
  return (
  <SecondAgeContainer>
    <img src={DuelTerminal} alt="​​Messier 7 Pleiades" />
    <SecondAgeButtons>
    <ButtonLaval onClick={() => goToAgeCards(navigate, age, "Laval")}>Laval</ButtonLaval>
    <ButtonGemKnight onClick={() => goToAgeCards(navigate,age,"Gem-")}>Gem-Knight</ButtonGemKnight>
    <ButtonGusto onClick={() =>  goToAgeCards(navigate, age, "Gusto")}>Gusto</ButtonGusto>
    <ButtonGishiki onClick={() => goToAgeCards(navigate, age, "Gishki")}>Gishki</ButtonGishiki>
    </SecondAgeButtons>
    <SecondAgeButtons>
    <ButtonSteelWarm onClick={() => goToAgeCards(navigate, age, "Steelswarm ")}>Steelswarm</ButtonSteelWarm>
    <ButtonVylon onClick={() => goToAgeCards(navigate, age, "Vylon")}>Vylon</ButtonVylon>
    <ButtonEvilswarm onClick={() => goToAgeCards(navigate, age, "Lswarm")}>Evilswarm</ButtonEvilswarm>
    <ButtonConstelar onClick={() => goToAgeCards(navigate, age, "Constellar")}>Constellar</ButtonConstelar>
    </SecondAgeButtons>
  </SecondAgeContainer>
   
  )
}

export default SecondEra