import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBranded, ButtonDespia, ButtonDogmatika, ButtonIceJade, ButtonSprigans, ButtonSwordSoul, ButtonTherion, ButtonTriBrigade, ContainerButtons, MainContainer, SecondContainerButtons } from './styled'
import { goToBrandedCards } from '../../routes/coordinator'
const BrandedPage = () => {
  const navigate = useNavigate()
  return (
    <MainContainer>
      <ContainerButtons>
      <ButtonDogmatika onClick={() => goToBrandedCards(navigate, "Dogmatika")}>Dogmatika</ButtonDogmatika>
      <ButtonTriBrigade onClick={() => goToBrandedCards(navigate, "Tri-Brigade")}>Tri-Brigade</ButtonTriBrigade>
      <ButtonSprigans onClick={() => goToBrandedCards(navigate, "Springans")}>Springans</ButtonSprigans>
      <ButtonBranded onClick={() => goToBrandedCards(navigate, "Branded")}>Branded</ButtonBranded>
      </ContainerButtons>
      <SecondContainerButtons>
      <ButtonDespia onClick={() => goToBrandedCards(navigate, "Despia")}>Despia</ButtonDespia>
      <ButtonSwordSoul onClick={() => goToBrandedCards(navigate, "Swordsoul")}>Swordsoul</ButtonSwordSoul>
      <ButtonIceJade onClick={() => goToBrandedCards(navigate, "Icejade")}>Icejade</ButtonIceJade>
      <ButtonTherion onClick={() => goToBrandedCards(navigate, "Therion")}>Therion</ButtonTherion>
      </SecondContainerButtons>
    </MainContainer>
  )
}

export default BrandedPage