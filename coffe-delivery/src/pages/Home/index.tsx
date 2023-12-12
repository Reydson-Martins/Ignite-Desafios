
import { Catalog } from "./components/Catalog";
import { Intro } from "./components/intro";
import { HomeLayoutContainer } from "./styles";

export function HomePage(){
  return (
    <HomeLayoutContainer >
      <Intro />
      <Catalog/>
    </HomeLayoutContainer>
  )
}