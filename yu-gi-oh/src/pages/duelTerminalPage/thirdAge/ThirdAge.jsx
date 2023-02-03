import React from 'react'
import { ThirdAgeContainer, ContainerButtons, ButtonNekroz, ButtonRitualBeast, ButtonYangZing, ButtonShaddol, ButtonSattelar, ButtonInfernoid, ButtonZefra  } from './Styled'
import nekroz from '../../../Assets/nekroz.png'
import { Navigate, useNavigate } from 'react-router-dom'
import {goToAgeCards } from '../../../routes/coordinator'
const ThirdAge = () => {
  const navigate = useNavigate()
  const age = "ThirdAge"
  return (
    <ThirdAgeContainer>
      <img src={nekroz} alt="Nekroz Cart" />
      <ContainerButtons>
      <ButtonNekroz onClick={() => goToAgeCards(navigate, age, "Nekroz")}>Nekroz</ButtonNekroz>
      <ButtonRitualBeast onClick={() => goToAgeCards(navigate, age, "Ritual Beast")}>Ritual Beast</ButtonRitualBeast>
      <ButtonYangZing onClick={() => goToAgeCards(navigate, age, "Yang Zing")}>Yang Zing</ButtonYangZing>
      <ButtonShaddol onClick={() => goToAgeCards(navigate, age, "Shaddoll")}>Shaddoll</ButtonShaddol>
      </ContainerButtons>
      <ContainerButtons>
      <ButtonSattelar onClick={() => goToAgeCards(navigate, age, "Tellarknight")}>Satellarknight</ButtonSattelar>
      <ButtonSattelar onClick={() => goToAgeCards(navigate, age, "Qli")}>Qliphot</ButtonSattelar>
      <ButtonInfernoid onClick={() => goToAgeCards(navigate, age, "Infernoid")}>Infernoid</ButtonInfernoid>
      <ButtonZefra onClick={() => goToAgeCards(navigate, age, "Zefra")}>Zefra</ButtonZefra>
      </ContainerButtons>
    </ThirdAgeContainer>
  )
}

export default ThirdAge