import styled from "styled-components"
import WorldChalice from '../../Assets/WorldChalice.png'

export const MainContainer = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
background-image: url(${WorldChalice});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
align-items: center;`

export const ContainerButtons = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 100vh;
margin-left: 20vw;
`

export const ButtonWorldChalice = styled.button`
background-color: #7B6CD9;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 0.5rem;
width: 8rem;
height: 3rem;
margin-right: 1rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #4E9DA6 0.5em 0.5em 0.5em;
    background-color:#4957A6;
}`

export const ButtonKrawler = styled.button`
background-color: #F22F1D;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 0.5rem;
width: 8rem;
height: 3rem;
margin-right: 0.5rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #BFB47A 0.5em 0.5em 0.5em;
    background-color:#F28E13;
}`

export const ButtonMekkKnight = styled.button`
background-color: #6F8ABF;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 0.5rem;
width: 8rem;
height: 3rem;
margin-right: 0.5rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #1B33BF 0.5em 0.5em 0.5em;
    background-color:#11308C;
}`

export const ButtonWorldLegacy = styled.button`
background-color: #F20544;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 0.5rem;
width: 8rem;
height: 3rem;
margin-right: 0.5rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #8F78BF 0.5em 0.5em 0.5em;
    background-color:#252273;
}`

export const ButtonKnightmare = styled.button`
background-color: #5741A6;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 0.5rem;
width: 8rem;
height: 3rem;
margin-right: 0.5rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #F2DC6D 0.5em 0.5em 0.5em;
    background-color:#866CB6;
}`

export const ButtonCrusadia = styled.button`
background-color: #507CC3;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 0.5rem;
width: 8rem;
height: 3rem;
margin-right: 0.5rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #BEB071 0.5em 0.5em 0.5em;
    background-color:#82C8D4;
}` 


export const ButtonOrcust = styled.button`
background-color: #A09ECA;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 0.5rem;
width: 8rem;
height: 3rem;
margin-right: 0.5rem;
transition-duration: 0.5s;
:hover {
    color: white;
    text-shadow: #F3EDC9 0.5em 0.5em 0.5em;
    background-color:#C2C4F2;
}`