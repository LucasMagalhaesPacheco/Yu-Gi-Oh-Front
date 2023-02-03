import React from 'react'
import { ButtonAllyOfJustice, ButtonFlabed, ButtonFlamvell, ButtonGenex, ButtonIceBarrier, ButtonJuracc, ButtonMistValley, ButtonWorms, ButtonXSaber, ContainerButtons, FirstEraContainer } from './Styled'
import Monster from '../../../Assets/DuelTerminalMonster.png'
import { useNavigate } from 'react-router-dom'
import {goToAgeCards } from '../../../routes/coordinator'
const FirstEra = () => {
  const navigate = useNavigate()
  const age = "FirstAge"
  return (
    <FirstEraContainer>
     <img src={Monster} alt="Dragon Ice Barrier" />
     <ContainerButtons>
      <ButtonIceBarrier onClick={() => goToAgeCards(navigate, age, "Ice Barrier")}>Ice Barrier</ButtonIceBarrier>
      <ButtonFlamvell onClick={() => goToAgeCards(navigate, age, "Flamvell")}>Flamvell</ButtonFlamvell>
      <ButtonMistValley onClick={() => goToAgeCards(navigate, age, "Mist Valley")}>Mist Valley</ButtonMistValley>
      <ButtonXSaber onClick={() => goToAgeCards(navigate, age, "X-Saber")}>X-Saber</ButtonXSaber>
      <ButtonWorms onClick={() => goToAgeCards(navigate, age, "Worm")}>Worms</ButtonWorms>
     </ContainerButtons>
     <ContainerButtons>
      <ButtonAllyOfJustice onClick={() => goToAgeCards(navigate, age, "Ally Of Justice") }>Ally of Justice</ButtonAllyOfJustice>
      <ButtonGenex onClick={() => goToAgeCards(navigate, age, "Genex")}>Genex</ButtonGenex>
      <ButtonGenex onClick={() => goToAgeCards(navigate, age, "Naturia")}>Naturia</ButtonGenex>
      <ButtonFlabed onClick={() => goToAgeCards(navigate, age, "Fabled")}>Fabled</ButtonFlabed>
      <ButtonJuracc onClick={() => goToAgeCards(navigate, age, "Jurrac")}>Jurrac</ButtonJuracc>
     </ContainerButtons>
    </FirstEraContainer>
  )
}

export default FirstEra