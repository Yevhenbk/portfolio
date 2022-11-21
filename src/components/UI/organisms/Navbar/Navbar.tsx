import * as React from 'react'
import { NavbarStyled } from './NavbarStyled'
import { Context } from '../../../../store/context'

const Navbar = () => {

  const { navbar } = React.useContext(Context)  

  return (
    <NavbarStyled
    isWhite={navbar ? true : false}>
      Navbar
    </NavbarStyled>
  )
}

export default Navbar