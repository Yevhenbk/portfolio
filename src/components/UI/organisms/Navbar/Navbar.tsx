import * as React from 'react'
import { NavbarStyled, DivStyled } from './NavbarStyled'
import { Context } from '../../../../store/context'
import Link from '@molecules/Link/Link'
import Button from '@molecules/Button/Button'
import { menuItems, Props as menuItemsProps } from '../../../../../static/utils/MenuItems'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navbar: React.FC = () => {

  const { navbar } = React.useContext(Context) 

  return (
    <NavbarStyled
    isWhite={ navbar ? true : false }>
      <DivStyled
        width='32rem'
      >
        {menuItems.map((item: menuItemsProps ) => (
          <Link 
            key={item.id}
            myKey={item.id}
            color={ navbar ? 'black' : '#6E6E6E' }
            background='transparent'
            fontFamily='Share Tech Mono'
            fontSize={16}
            fontWeight={500}
            padding='.35rem .85rem'
            borderRadius='2px'
            hoverBackground={global.scrollY >= 10 ?
            '#fff' : '#cacacaa9'}
            onClick={() => {
              if (typeof window != 'undefined') {
                var title = window.document.getElementById(item.title)

                if (title != null) {
                  title.scrollIntoView({behavior:'smooth'})
                }
              }
            }}
          >
            <span className='text-[#5A3BF8]'>
              {item.number}.
            </span>
            {item.name}
          </Link>  
        ))}
      </DivStyled>
      <DivStyled
        width='11.5rem'
      >
        <Button
          color='white'
          background='#5A3BF8'
          hoverBackground='transparent'
          hoverColor='#5A3BF8'
          border='1px solid #5A3BF8'
          fontSize={16}
          fontFamily='Share Tech Mono'
          padding='.25rem .75rem'
          radius={3}
          isAnimated={true}
        >
          Resume
        </Button>
        <div 
          className='
          flex flex-row 
          w-[4.75rem]
          justify-between 
          items-end'
        >
          <Link
          href='https://github.com/Yevhenbk'
          fontSize={24}
          color='black' 
          padding='.35rem'
          borderRadius='2px'
          hoverBackground={global.scrollY >= 10 ?
          '#fff' : '#cacacaa9'}
          >
            <AiFillGithub />
          </Link>
          <Link
            href='https://www.linkedin.com/in/yevhen-balahutrak'
            fontSize={24}
            color='black'
            padding='.35rem'
            borderRadius='2px'
            hoverBackground={global.scrollY >= 10 ?
            '#fff' : '#cacacaa9'}
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </DivStyled>
    </NavbarStyled>
  )
}

export default Navbar