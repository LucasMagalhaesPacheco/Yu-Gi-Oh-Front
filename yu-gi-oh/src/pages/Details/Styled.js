import styled from "styled-components";

// export const MainContainerCards = styled.main`
// /* height: 100vh;
// width: 100vw;` */


export const CardSection = styled.section`
display: flex;
flex-direction: row;

`

export const ImgCard = styled.img`
border-radius: 15px;
min-height: 28.53rem;
min-width: 19.5625rem;
height: 100%;
transition: transform 1s;
transform: translateX(0) scale(0.5);
:hover, :focus {
    transform: translateX(10px) scale(0.8);
}`

export const CardText = styled.section`
display:flex;
flex-direction: column;`

export const H1 = styled.h1`
display: flex;
justify-content: column;`