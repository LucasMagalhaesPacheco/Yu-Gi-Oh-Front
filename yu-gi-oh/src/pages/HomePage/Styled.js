import styled from "styled-components";
import ImageHome from "../../Assets/Home.png"
export const HomeStyled = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
background-image: url(${ImageHome});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
align-items: center;
`

export const ContainerButtons = styled.section`
display: flex;
flex-direction: row;
align-items: center;
/* justify-content: space-between; */
`

export const ButtonBranded = styled.button`
background-color: #8530d1;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
border-radius: 0.5rem;
width: 10rem;
height: 3rem;
margin-right: 1rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #8530d1 0.5em 0.5em 0.5em;
    background-color:#410179;
}`

export const ButtonDuelTerminal = styled.button`
background-color: #ff931e;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
border-radius: 0.5rem;
width: 10rem;
height: 3rem;
margin-right: 1rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #f98200 0.5em 0.5em 0.5em;
    background-color:#d66f00;
}`

export const ButtonWorldChalice = styled.button`
background-color: #21d2fb;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
border-radius: 0.5rem;
width: 10rem;
height: 3rem;
margin-right: 1rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #028eb0 0.5em 0.5em 0.5em;
    background-color:#02abd3;
}`