import { MailtoStyled } from './MailtoStyled'
import { IconWrapperStyled,
  Props as IconWrapperStyledProps } from './Mailto.Helper'
import Text from '@atoms/Text/Text'
import { useSpring, config } from 'react-spring'
import Button from '@molecules/Button/Button'
import Image from 'next/image'
import avatar from '../../../../../static/img/avatar.jpg'
import gmail from '../../../../../static/img/gmail.png'

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
      {/* <div>
        <Image 
          src={avatar} 
          alt='avatar'
          className='
          rounded-full
          w-[8rem] h-[8rem]
          object-cover' 
        />
      </div> */}
      <div
        className='
        flex flex-col
        gap-5'
      >
        <Text
          fontSize={24}
          fontWeight={600}
          fontFamily='Poppins'
        >
          {/* Hi, it's me again! &#128075; */}
          <h1>About me</h1>
        </Text>
        {/* <Text
          color='white'
          fontSize={16}
          fontWeight={500}
          width='23rem'
          fontFamily='Poppins'
        >
          My inbox is always open. Whether you have a question or 
          just want to say hi, I will always get back to you! Reach 
          out and let's build amaizing experiences together!
        </Text> */}
        <Text
          color='#616161'
          fontSize={18}
          fontWeight={500}
          fontFamily='Poppins'
        >
          <p>
            Hello! My name is Yevhen and I enjoy creating things 
            that live on the internet. My interest in web development 
            started back in 2018 when I decided to take Python course
            at a <a href='https://www.uc3m.es/Inicio' className='text-[#5A3BF8]
            hover:text-[#5A3BC9] hover:underline' target='_blank'>university</a>.
          </p>
          <br/>
          <p>
            After 3 years of studying Business Administration, I have decided 
            to reconvert into a developer to become more independent by
            following a 9 weeks coding <a href='https://4geeksacademy.com/es/inicio' 
            className='text-[#5A3BF8] hover:text-[#5A3BC9] hover:underline' target='_blank'>bootcamp</a>. 
            I am a highly driven and self starter and enjoy talking about new projects and
            responsibilities. Finding ways to grow and push myself is always a
            priority for both in professional settings or in my personal endeavors.
          </p>
          <br/>
          <p>
            Recently I worked on a <a href='https://twitter.com/worksut_' className='text-[#5A3BF8]
            hover:text-[#5A3BC9] hover:underline' target='_blank'>startup</a> with designers and management team to develop a
            <a href='https://worksut.netlify.app/' className='text-[#5A3BF8] hover:text-[#5A3BC9] hover:underline' 
            target='_blank'> landing page</a> for the company. Currently I am looking for new opportunities, 
            so don't hesistate to reach out.
          </p>
        </Text>
      </div>
      {/* <IconWrapper
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
      </IconWrapper> */}
    </MailtoStyled>
  )
}

export default Mailto