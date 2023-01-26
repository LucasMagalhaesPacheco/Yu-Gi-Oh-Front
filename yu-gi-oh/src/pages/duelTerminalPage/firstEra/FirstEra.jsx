import React from 'react'
import { ButtonAllyOfJustice, ButtonFlabed, ButtonFlamvell, ButtonGenex, ButtonIceBarrier, ButtonJuracc, ButtonMistValley, ButtonWorms, ButtonXSaber, ContainerButtons, FirstEraContainer } from './Styled'
import Monster from '../../../Assets/DuelTerminalMonster.png'
const FirstEra = () => {
  return (
    <FirstEraContainer>
     <img src={Monster} alt="Dragon Ice Barrier" />
     <ContainerButtons>
      <ButtonIceBarrier>Ice Barrier</ButtonIceBarrier>
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