import { MailtoStyled } from './MailtoStyled'
import { IconWrapperStyled,
  Props as IconWrapperStyledProps } from './Mailto.Helper'
import Text from '@atoms/Text/Text'
import { useSpring, config } from 'react-spring'
import Button from '@molecules/Button/Button'
import Image from 'next/image'
import avatar from '../../../../../static/img/avatar.jpg'
import gmail from '../../../../../static/img/gmail.png'

const calc = (x: any, y: any) => [-(y - window.innerHeight / 1.5) / 40, (x - window.innerWidth / 1.5) / 40, 1]
const trans = (x: any, y: any, s: any) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const IconWrapper: React.FC<IconWrapperStyledProps> = (props) => {
  return (
    <IconWrapperStyled
      onClick={props.onClick}
    >
      {props.children}
    </IconWrapperStyled>
  )
}

const Mailto: React.FC = () => {

  return (
    <MailtoStyled>
      <Text 
        fontFamily='Poppins'
        fontSize={36}
        fontWeight={900}
        lineHeight='1.25'
        width='25rem'
      >
        <h3>What is next?</h3>
      </Text>
      <Text
        fontSize={21}
        fontWeight={500}
        fontFamily='Poppins'
        width='30rem'
      >
        <p>My inbox is always open. Whether you have a question or 
        just want to say hi, I will always get back to you! Reach 
        out and let's build amaizing experiences together!</p>
      </Text>
      <IconWrapper
        onClick={() => global.location.href = 'mailto:balagutrak.jenia@gmail.com'}
      >
        <Image 
          src={gmail} 
          alt='gmail'
          className='
          w-8
          object-cover' 
        />
        <Text
          fontSize={21}
          fontWeight={500}
          fontFamily='Poppins'
        >
          Get in Touch
        </Text>
      </IconWrapper>
    </MailtoStyled>
  )
}

export default Mailto