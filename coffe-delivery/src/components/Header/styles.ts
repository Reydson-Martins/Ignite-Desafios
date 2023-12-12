import styled, {css} from "styled-components"



export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background-color: ${({theme}) => theme.colors["base-background"]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 1px;

  > div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.div `
display: flex;
align-items: center;
justify-content: 0.75rem;
gap: 0.75rem;
`
;


interface ButtonHeaderProps{
  variant: "purple" | "yellow"
}

export const ButtonHeader = styled.button<ButtonHeaderProps>`
display: flex;
align-items: center;
justify-content: center;
gap: 4px;
min-width: 2.3rem;
height:2.3rem;
border-radius: 6px;
border: none;
padding: 0 0.5rem;
font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
position: relative;

background: ${({variant, theme}) => css `
  ${theme.colors[`brand-${variant}-light`]}
  `}
;
color: ${({variant, theme}) => css `
  ${theme.colors[`brand-${variant}-dark`]}
  `}
;

${({variant,theme}) => variant === "purple" && css`
 svg{
  color: ${theme.colors["brand-purple"]}
 } 
` }

` 
