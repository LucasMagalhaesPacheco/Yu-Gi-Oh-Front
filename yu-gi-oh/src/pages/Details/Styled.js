import styled from "styled-components";

export const MainContainer = styled.main`
margin-top: 1rem;`

export const CardSection = styled.section`
width: 90%;
position: relative;
max-width: 40rem;
margin: auto;
background: #fff;
box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
padding: 25px;
border-radius: 25px;
height: 25rem;
display: flex;


   
@media screen and (max-width: 992px) {
    max-width: 680px;
        height: 400px;
  }
  
  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
  
  
  @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 350px;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  `

  export const ImgStyled = styled.img`
   width: 40%;
    /* flex-shrink: 0; */
    height: 90%;
    box-shadow: 4px 13px 30px 1px rgb(90, 90, 90);
    border-radius: 20px;
    transform: translateX(-40px);
    overflow: hidden;
    transition: transform 1s;
   transform: translateX(0) scale(0.8rem);
  :hover, :focus {
    transform: translateX(8px) scale(0.7);
  }

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
  `

  export const ContentDiv = styled.section`
  width: 60%;
  padding-right: 30px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
    @media screen and (max-width: 992px) {
      width: 55%;
    }
    @media screen and (max-width: 768px) {
    margin-top: -80px;
    text-align: center;
    padding: 0 30px;
    }
    
    @media screen and (max-width: 576px) {
      padding: 0
    }
  `

  export const H1 = styled.h1`
  font-size: 25px;
  text-align: center;`

  export const Text = styled.p`
  font-size: 15px;
  margin-top: 1px;`

  export const DisplayCard = styled.ul`
  padding-left: 0;
  display: grid;
  max-width: 37.5rem;
  grid-template: repeat(2,1fr)/repeat(2,1fr);
  grid-template-rows: min-content 1fr;
  grid-gap: 10px;
  grid-auto-flow: row;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;

  li {
    list-style: none;
    min-width: 9.375rem;
    text-align: left;
    padding: 5px;
    display: block;
    border-radius: 5px;
    color: white;
    background-color: #b2591a;
  }
  `