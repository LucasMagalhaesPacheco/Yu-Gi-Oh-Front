import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonCrusadia, ButtonKnightmare, ButtonKrawler, ButtonMekkKnight, ButtonOrcust, ButtonWorldChalice, ButtonWorldLegacy, ContainerButtons, MainContainer } from './Styled'
import { goToWorldChaliceCards } from '../../routes/coordinator'
const WorldChalicepage = () => {
  const navigate = useNavigate()
  return (
    <MainContainer>
      <ContainerButtons>
      <ButtonWorldChalice onClick={() => goToWorldChaliceCards(navigate, "World Chalice")}>World Chalice</ButtonWorldChalice>
      <ButtonKrawler onClick={() => goToWorldChaliceCards(navigate, "Krawler")}>Krawler</ButtonKrawler>
      <ButtonMekkKnight onClick={() => goToWorldChaliceCards(navigate, "Mekk-Knight")}>Mekk-Knight</ButtonMekkKnight>
      </ContainerButtons>
      <ContainerButtons>
      <ButtonWorldLegacy onClick={() => goToWorldChaliceCards(navigate, "World Legacy")}>World Legacy</ButtonWorldLegacy>
      <ButtonKnightmare onClick={() => goToWorldChaliceCards(navigate, "Knightmare")}>Knightmare</ButtonKnightmare>
      <ButtonCrusadia onClick={() => goToWorldChaliceCards(navigate, "Crusadia")}>Crusadia</ButtonCrusadia>
      </ContainerButtons>
      <ContainerButtons>
      <ButtonOrcust onClick={() => goToWorldChaliceCards(navigate, "Orcust")}>Orcust</ButtonOrcust>
      </ContainerButtons>
    </MainContainer>
  )
}

export default WorldChalicepage