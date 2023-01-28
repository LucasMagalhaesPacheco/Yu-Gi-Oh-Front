import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBranded, ButtonDuelTerminal, ButtonWorldChalice, ContainerButtons, HomeStyled } from './Styled'
import Logo from '../../Assets/logo.png'
import { goToBranded, goToDuelTerminal, goToWorldChalice} from '../../routes/coordinator'
const HomePage = () => {
 const navigate = useNavigate()
  return (
    <HomeStyled>
      <img  src={Logo} alt="Logo Yu-Gi-Oh" />
      <ContainerButtons>
        <ButtonBranded onClick={() => goToBranded(navigate)}>Branded</ButtonBranded>
        <ButtonDuelTerminal onClick={() => goToDuelTerminal(navigate)}>Duel Terminal</ButtonDuelTerminal>
        <ButtonWorldChalice onClick={() => goToWorldChalice(navigate)}> World Chalice</ButtonWorldChalice>
      </ContainerButtons>
    </HomeStyled>
  )
}

export default HomePage