import React from 'react'
import { ButtonAllyOfJustice, ButtonFlabed, ButtonFlamvell, ButtonGenex, ButtonIceBarrier, ButtonJuracc, ButtonMistValley, ButtonWorms, ButtonXSaber, ContainerButtons, FirstEraContainer } from './Styled'
import Monster from '../../../Assets/DuelTerminalMonster.png'
import { useNavigate } from 'react-router-dom'
import {goToAllyOfJustice, goToFlamvell, goToFlabed, goToGenex, goToIceBarrier, goToJurrac, goToMistValley, goToNaturia, goToWorms, goToXSaber} from '../../../routes/coordinator'
const FirstEra = () => {
  const navigate = useNavigate()
  return (
    <FirstEraContainer>
     <img src={Monster} alt="Dragon Ice Barrier" />
     <ContainerButtons>
      <ButtonIceBarrier onClick={() => goToIceBarrier(navigate)}>Ice Barrier</ButtonIceBarrier>
      <ButtonFlamvell>Flamvell</ButtonFlamvell>
      <ButtonMistValley>Mist Valley</ButtonMistValley>
      <ButtonXSaber>X-Saber</ButtonXSaber>
      <ButtonWorms>Worms</ButtonWorms>
     </ContainerButtons>
     <ContainerButtons>
      <ButtonAllyOfJustice>Ally of Justice</ButtonAllyOfJustice>
      <ButtonGenex>Genex</ButtonGenex>
      <ButtonGenex>Naturia</ButtonGenex>
      <ButtonFlabed>Fabled</ButtonFlabed>
      <ButtonJuracc>Jurrac</ButtonJuracc>
     </ContainerButtons>
    </FirstEraContainer>
  )
}

export default FirstEra