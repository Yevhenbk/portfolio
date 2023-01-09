import { MailtoStyled } from './MailtoStyled'
import { IconWrapperStyled,
  Props as IconWrapperStyledProps } from './Mailto.Helper'
import Text from '@atoms/Text/Text'
import Button from '@molecules/Button/Button'
import Image from 'next/image'
import avatar from '../../../../../static/img/avatar.jpg'
import gmail from '../../../../../static/img/gmail.png'

const IconWrapper: React.FC<IconWrapperStyledProps> = (props) => {
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
      <div>
        <Image 
          src={avatar} 
          alt='avatar'
          className='
          rounded-full
          w-[8rem] h-[8rem]
          object-cover' 
        />
      </div>
      <div
        className='
        flex flex-col
        gap-5'
      >
        <Text
          color='white'
          fontSize={24}
          fontWeight={600}
          fontFamily='Poppins'
        >
          Hi, it's me again! &#128075;
        </Text>
        <Text
          color='white'
          fontSize={16}
          fontWeight={500}
          width='23rem'
          fontFamily='Poppins'
        >
          My inbox is always open. Whether you have a question or 
          just want to say hi, I will always get back to you! Reach 
          out and let's build amaizing experiences together!
        </Text>
      </div>
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
          color='#F63533'
          fontSize={21}
          fontWeight={600}
          fontFamily='Poppins'
        >
          Get in Touch
        </Text>
      </IconWrapper>
    </MailtoStyled>
  )
}

export default Mailto