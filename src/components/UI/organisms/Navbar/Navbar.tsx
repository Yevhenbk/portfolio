import * as React from 'react'
import { NavbarStyled, DivStyled } from './NavbarStyled'
import { Context } from '../../../../store/context'
import Link from '@molecules/Link/Link'
import Button from '@molecules/Button/Button'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navbar: React.FC = () => {

  const { navbar, menuItems } = React.useContext(Context) 

  return (
    <NavbarStyled
    isWhite={ navbar ? true : false }>
      <DivStyled
        width='30rem'
      >
        {menuItems.map((item: any) => (
          <Link 
            color={ navbar ? 'black' : '#6E6E6E' }
            background='transparent'
            fonFamily='Share Tech Mono, sans'
            fontSize={16}
            fontWeight={500}>
            <span className='text-[#5A3BF8]'>
              {item.number}.
            </span>
            {item.name}
          </Link>  
        ))}
      </DivStyled>
      <DivStyled
        width='10rem'
      >
        <Button
          color='white'
          background='#5A3BF8'
          hoverBackground='transparent'
          hoverColor='#5A3BF8'
          borderColor='#5A3BF8'
          fontSize={16}
          fontFamily='Share Tech Mono, serif'
          padding='.25rem .75rem'
          radius={3}
          isAnimated={true}
        >
          Resume
        </Button>
        <Link
          fontSize={24}
          color='black' 
          hoverColor='#E044DE'
        >
          <AiFillGithub />
        </Link>
        <Link
          fontSize={24}
          color='black'
          hoverColor='#E044DE' 
        >
          <AiFillLinkedin />
        </Link>
      </DivStyled>
    </NavbarStyled>
  )
}

export default Navbar