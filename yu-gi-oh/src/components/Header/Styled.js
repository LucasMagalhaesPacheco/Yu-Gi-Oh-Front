import styled from "styled-components";
import ImageHeader from '../../Assets/header.png'
export const HeaderStyled = styled.header`
width: 100%;
padding-top: 0.1rem;
padding-left: 0.1rem;
align-items: center;
display: flex;
justify-content: space-around;
background-image: url(${ImageHeader});
img{
    width: 12rem;
}

@media (max-width: 480px) {
      max-width: 100vw;
      display: flex;
      align-items: center;
      background-image: url(${ImageHeader});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center; 
      img {
        width: 7rem;
      }
     
}
`

export const HeaderButton = styled.button`
   background-color: #0F4ABF;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    padding: 0.625rem 1.5rem;
    border-radius: 0.5rem;
    transition-duration: 0.5s;
    :hover {
        color: white;
        text-shadow: #0d3bb0 0.5em 0.5em 0.5em;
        background-color:#0d3bb0; ;
    }
    @media (max-width: 480px) {
        display: none;
    }
`
