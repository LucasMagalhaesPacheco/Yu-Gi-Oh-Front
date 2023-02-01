import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonConstelar, ButtonEvilswarm, ButtonGemKnight, ButtonGishiki, ButtonGusto, ButtonLaval, ButtonSteelWarm, ButtonVylon, SecondAgeButtons, SecondAgeContainer } from './styled'
import { goToSecondAgeCards } from '../../../routes/coordinator'
import DuelTerminal from '../../../Assets/DuelTerminalSecondAge.png'
import { ContainerButtons } from '../Styled'
const SecondEra = () => {
  const navigate = useNavigate()
  return (
  <SecondAgeContainer>
    <img src={DuelTerminal} alt="​​Messier 7 Pleiades" />
    <SecondAgeButtons>
    <ButtonLaval>Laval</ButtonLaval>
    <ButtonGemKnight>Gem-Knight</ButtonGemKnight>
    <ButtonGusto>Gusto</ButtonGusto>
    <ButtonGishiki>Gishiki</ButtonGishiki>
    </SecondAgeButtons>
    <SecondAgeButtons>
    <ButtonSteelWarm>Steelswarm</ButtonSteelWarm>
    <ButtonVylon>Vylon</ButtonVylon>
    <ButtonEvilswarm>Evilswarm</ButtonEvilswarm>
    <ButtonConstelar>Constelar</ButtonConstelar>
    </SecondAgeButtons>
  </SecondAgeContainer>
   
  )
}

export default SecondEra