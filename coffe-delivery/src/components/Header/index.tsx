import LogoCoffe from '../../assets/logoCoffe.svg'
import { ShoppingCart, MapPin } from "phosphor-react";
import { ButtonContainer, ButtonHeader, HeaderContainer } from './styles'
import {NavLink} from 'react-router-dom'
export function Header () {
  return(
    <HeaderContainer>
      <div className="container">
      <NavLink to="/">
      <img src={LogoCoffe} alt='' />
      </NavLink>
      

      <ButtonContainer>
      <ButtonHeader variant='purple'>
      <MapPin weight='fill'
        size={20}
        
        /> Porto Alegre, RS
      </ButtonHeader>

      <ButtonHeader variant='yellow'>
       <NavLink to="checkout"> 
      <ShoppingCart weight="fill"
        size={20}
        />
        </NavLink>
      </ButtonHeader>
      
      
      
      </ButtonContainer>

      </div>
      
      
    </HeaderContainer>
  )
}

//<PiShoppingCartFill />