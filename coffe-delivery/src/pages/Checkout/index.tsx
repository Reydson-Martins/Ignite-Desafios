import { CoffeeCheckout } from "./components/CoffeeCheckout";
import { OrderCheckCoffee } from "./components/OrderCheckCoffee";

export function CheckoutPage(){
  return (
    <div>
      <CoffeeCheckout />
      <OrderCheckCoffee />
    </div>
  )
}