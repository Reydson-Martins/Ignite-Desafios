import styled from "styled-components";
import { RegularText, TitleText } from "../../../../layouts/Typography";


export const CardContainer = styled.div`
  border-radius: 6px 36px;
  height: 310px;
  width: 256px;
  background:  ${({theme}) => theme.colors["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  
  
  img {
    width: 7.5rem;
    height:  7.5rem;
    margin-top: -2rem;
    //position: relative;
    //top: -50px;
  }
  
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  gap: 4px;
  flex-wrap: wrap;

  span{
  text-transform: uppercase;
  border-radius: 100px;  
  padding: 4px 8px;
  background: ${({theme}) => theme.colors["brand-yellow-light"]};
  color: ${({theme}) => theme.colors["brand-yellow-dark"]};
  font-size: ${({theme}) => theme.textSizes["components-tag"]};
  font-weight: 700;
  padding: 0.25rem 0.5rem ;
  }
`;

export const NameText = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
})`
  margin-bottom: 0.5rem;
`;

export const TextDescription = styled(RegularText).attrs({
  size: "s",
  color: "label",
})`

  margin: 0 1.25rem 2rem;
  text-align: center;
`

export const BuyFooter = styled.section `
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const ButtonShopping = styled.button`
  display: flex;
  padding: 0.5rem;
  border: none;
  gap: 0.5rem;
  background-color: ${({theme}) => theme.colors["brand-purple-dark"]};
  border-radius: 0.4rem;
  color: ${({theme}) => theme.colors["base-card"]};
`;
