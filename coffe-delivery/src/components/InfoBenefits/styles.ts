import styled from "styled-components";

export const BenefitsContainer = styled.div `
  display: flex;
  align-items: center;
 gap: 0.75rem;
`;

interface IconContainerProps {
  iconBg?: string;
}
export const IconContainer = styled.div<IconContainerProps>`
width: 2.4rem;
height: 2.4rem;
border-radius: 50%;
  
background: ${({iconBg}) =>  iconBg} ;
color: ${({theme}) => theme.colors["base-white"]};
font-size: 1.3rem;
display: flex;
justify-content: center;
align-items: center;
`;