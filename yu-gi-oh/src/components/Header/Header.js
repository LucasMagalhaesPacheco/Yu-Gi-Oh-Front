import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import { goToHome, goToBranded, goToDuelTerminal, goToWorldChalice, goToPreviousPage  } from '../../routes/coordinator'
import { HeaderButton, HeaderStyled } from './Styled'
export const Header = () => {
 const navigate = useNavigate()

  return (
    <HeaderStyled>
    <img  src={Logo} alt="Logo Yu-Gi-Oh" onClick={() => goToHome(navigate)}/>
    <HeaderButton onClick={() => goToBranded(navigate)}>Branded</HeaderButton>
    <HeaderButton onClick={() => goToDuelTerminal(navigate)}>Duel Terminal</HeaderButton>
    <HeaderButton onClick={() => goToWorldChalice(navigate)}>World Chalice</HeaderButton>
    <HeaderButton onClick={() => goToPreviousPage(navigate)}>Voltar</HeaderButton>
    </HeaderStyled>
  )
}

