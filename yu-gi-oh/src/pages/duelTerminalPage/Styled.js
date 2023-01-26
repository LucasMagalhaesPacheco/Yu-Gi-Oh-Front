import styled from "styled-components";
import DuelTerminalImage from '../../Assets/DuelTerminal.jpg'

export const MainContainer = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
background-image: url(${DuelTerminalImage});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
align-items: center;`

export const ContainerButtons = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 120vh;
button {
    background-color: #D9C979;
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
        text-shadow: #D9C979 0.5em 0.5em 0.5em;
        background-color:#A69151;
        
    }
}`

