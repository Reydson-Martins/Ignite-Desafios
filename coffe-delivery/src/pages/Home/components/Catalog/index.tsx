import { CardCoffe } from "../CardCoffe"
import { IntroTitle } from "../intro/styles"
import { CatalogContainer, ListCoffee } from "./styles"

export function Catalog() {
  return(
    <CatalogContainer className="container">
      <IntroTitle size="l" color="subtitle">
        Nossos cafés
      </IntroTitle>
      <ListCoffee>
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />
      <CardCoffe />

      </ListCoffee>
    </CatalogContainer>
  )
}