import styled from "styled-components";
import IceBarrierImage from '../../../../Assets/IceBarrier.png'

export const MainContainer = styled.main`
position: relative;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
background-image: url(${IceBarrierImage});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
align-items: center;`

export const Body = styled.body`
margin: 0;`