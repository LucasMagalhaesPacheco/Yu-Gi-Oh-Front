import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerButtons, MainContainer } from './Styled'
import { goToFirstAge, goToSecondAge, goToThirdAge  } from '../../routes/coordinator'

const DuelTerminalPage = () => {
  const navigate = useNavigate()

  return (
    <MainContainer>
      <ContainerButtons>
      <button onClick={() => goToFirstAge(navigate)}>Primeira Era</button>
      <button onClick={() => goToSecondAge(navigate)}>Segunda Era</button>
      <button onClick={() => goToThirdAge(navigate)}>Terceira Era</button>
      </ContainerButtons>
    </MainContainer>
  )
}

export default DuelTerminalPage