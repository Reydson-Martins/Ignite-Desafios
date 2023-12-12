import { ReactNode } from "react";
import { BenefitsContainer, IconContainer } from "./styles";


interface InfoIconsProsps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function InfoBenefits ({icon, text, iconBg}:InfoIconsProsps) {
  return(
    <BenefitsContainer>
      <IconContainer iconBg={iconBg}>
        {icon}
      </IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </BenefitsContainer>
    

  )
}