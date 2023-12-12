import { IntroTitle } from "../../../Home/components/intro/styles";
import { CardDelivery } from "../CardDelivery";
import { CardPayment } from "../CardPayment";
import { CoffeeCheckoutContainer } from "./styles";

export function CoffeeCheckout() {
  return(
    <CoffeeCheckoutContainer>
      <IntroTitle size="xs">
      Complete seu pedido
      </IntroTitle>
      <CardDelivery />
      <CardPayment />
    </CoffeeCheckoutContainer>
  )
}