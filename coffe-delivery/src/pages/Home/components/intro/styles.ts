import styled from "styled-components";
import Background from "../../../../assets/background.svg"
import { rgba } from "polished";
import { RegularText, TitleText } from "../../../../layouts/Typography";
export const IntroContainer = styled.div`

width: 100%;
height: 33rem;
background: ${({theme}) => ` url(${Background}) no-repeat center,
  linear-gradient(
    0deg,
    ${theme.colors["base-white"]} 0%,
    ${rgba(theme.colors["base-background"], 0.2)} 50%,
    ${theme.colors["base-background"]} 100%
  )
  
  `}
 
;
//background-repeat: no-repeat;
//background-position: center;
background-size: cover;

display: flex;
align-items: center;
justify-content: center;


`
;

export const IntroContent = styled.section`
  display: flex;
  align-items: center;
  //justify-content: center;
  gap: 3.5rem;

  @media screen and (max-width: 1130px){
  
}
 /*  > div {
    width: auto;
  }

  img {
    width: auto;
  } */
`
;

export const IntroTitle = styled (TitleText)`
  margin-bottom: 1rem ;
`
;


export const IntroRegular  = styled (RegularText)`
  margin-bottom: 1rem ;
`
;

export const IntroBenefits = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 4rem;


`
;