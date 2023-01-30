import React from 'react'
import { ButtonAllyOfJustice, ButtonFlabed, ButtonFlamvell, ButtonGenex, ButtonIceBarrier, ButtonJuracc, ButtonMistValley, ButtonWorms, ButtonXSaber, ContainerButtons, FirstEraContainer } from './Styled'
import Monster from '../../../Assets/DuelTerminalMonster.png'
import { useNavigate } from 'react-router-dom'
import {goToFirstAgeCards } from '../../../routes/coordinator'
const FirstEra = () => {
  const navigate = useNavigate()

  return (
    <FirstEraContainer>
     <img src={Monster} alt="Dragon Ice Barrier" />
     <ContainerButtons>
      <ButtonIceBarrier onClick={() => goToFirstAgeCards(navigate, "Ice Barrier")}>Ice Barrier</ButtonIceBarrier>
      <ButtonFlamvell onClick={() => goToFirstAgeCards(navigate, "Flamvell")}>Flamvell</ButtonFlamvell>
      <ButtonMistValley onClick={() => goToFirstAgeCards(navigate, "Mist Valley")}>Mist Valley</ButtonMistValley>
      <ButtonXSaber onClick={() => goToFirstAgeCards(navigate, "X-Saber")}>X-Saber</ButtonXSaber>
      <ButtonWorms onClick={() => goToFirstAgeCards(navigate, "Worm")}>Worms</ButtonWorms>
     </ContainerButtons>
     <ContainerButtons>
      <ButtonAllyOfJustice onClick={() => goToFirstAgeCards(navigate, "Ally Of Justice") }>Ally of Justice</ButtonAllyOfJustice>
      <ButtonGenex onClick={() => goToFirstAgeCards(navigate, "Genex")}>Genex</ButtonGenex>
      <ButtonGenex onClick={() => goToFirstAgeCards(navigate, "Naturia")}>Naturia</ButtonGenex>
      <ButtonFlabed onClick={() => goToFirstAgeCards(navigate, "Fabled")}>Fabled</ButtonFlabed>
      <ButtonJuracc onClick={() => goToFirstAgeCards(navigate, "Jurrac")}>Jurrac</ButtonJuracc>
     </ContainerButtons>
    </FirstEraContainer>
  )
}

export default FirstEra