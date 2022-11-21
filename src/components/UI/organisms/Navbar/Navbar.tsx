import { NavbarStyled, Props as NavbarStyledProps } from './NavbarStyled'

const Navbar = (props: NavbarStyledProps) => {
  return (
    <NavbarStyled {...props}>
      Navbar
    </NavbarStyled>
  )
}

export default Navbar