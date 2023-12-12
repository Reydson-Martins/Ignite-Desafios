
import { ShoppingCart } from "phosphor-react";
import { RegularText, TitleText } from "../../../../layouts/Typography";
import { BuyFooter, CardContainer, NameText,TextDescription, TagsContainer, ButtonShopping } from "./styles";
import { CounterItem } from "../../../../components/CounterItem";



export function CardCoffe() {
  return(
    <CardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1701648000&Signature=odYqnr82xDhkoCADdv~D-Sbv6sD~DjZfFpnSfsBX~A1g5NKPxG5s53hlSQmoJUB1FNyGmj8gCLD~9Bl9K2xH5V-sGwO6XZPs88ACNx5RMVBbf4HvhlkVSEuDHJEd9RIfLg~OVGSrS0PgK-dTwpK1JD3jH2lDGo6l9GdbT4QiwxdCa~J-N6ak7y50DofNn223h4tZqGaf7vFzEpWzuDhyMxa83LDYNIQZAoMGOCGJnZeLei7wQMZYDKJmeudPh6xowfNNfSUZMTpF2oKVgl3~ZK1bctwXfhtmGChX9gH8yMiD5NAlATmczlPu9DI3MeW0U4-uSVK9bTiC3FRNYnuChA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      <TagsContainer>
        <span> tradicional</span>
        <span> tradicional</span>
      </TagsContainer>
      <NameText>
      Expresso Tradicional
      </NameText>
      <TextDescription>
      O tradicional café feito com água quente e grãos moídos
      </TextDescription>
      <BuyFooter>
        <div>
          <RegularText size="s" color="text">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9,90</TitleText>
        </div>
        
        <div>
        <CounterItem />
        <ButtonShopping>
          <ShoppingCart size={22} weight="fill"/>
        </ButtonShopping>
        
        </div>
        
      </BuyFooter>
    </CardContainer>
  )
}