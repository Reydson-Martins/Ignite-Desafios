import { IntroBenefits, IntroContainer, IntroContent, IntroRegular, IntroTitle } from "./styles";
import coffe from "./../../../../assets/coffe.svg"
import { InfoBenefits } from "../../../../components/InfoBenefits";

import { useTheme } from "styled-components";
import { ShoppingCart, Coffee,Package , Timer } from "phosphor-react";

export function Intro () {
  const {colors} = useTheme();
  return(
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <IntroTitle size="xl">
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <IntroRegular size="l" color="subtitle" as={"h3"}>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </IntroRegular>
          
        
        <IntroBenefits>
          <InfoBenefits 
            icon={<ShoppingCart weight="fill" /> }
            iconBg = {colors["brand-yellow-dark"]}
            text="Compra simples e segura"/>
          <InfoBenefits 
            icon={<Timer weight="fill" /> }
            iconBg = {colors["brand-yellow"]}
            text="Entrega rápida e rastreada"/>
          <InfoBenefits 
            icon={<Package  weight="fill" /> }
            iconBg = {colors["base-text"]}
            text="Embalagem mantém o café intacto"/>
          <InfoBenefits 
            icon={<Coffee weight="fill" /> }
            iconBg = {colors["brand-purple"]}
            text="O café chega fresquinho até você"/>
 
        </IntroBenefits>
        </div>
      <div>
       <img src={coffe} alt="" />
      </div>
      </IntroContent>
      
    </IntroContainer>
  )
}