import { AboutTableStyled, WrapperStyled } from './AboutTableStyled'
import Text from '@atoms/Text/Text'

const AboutTable: React.FC = () => {
  return (
    <AboutTableStyled>
      <div
        id='b-text'
        className='
        h-[100%] flex
        flex-col justify-between'
      >
        <Text
          fontFamily='Poppins'
          fontSize={36}
          fontWeight={700}
          lineHeight='1.25'
        >
          <h3>About Me</h3>
        </Text>
        <Text
          fontSize={21}
          fontWeight={500}
          fontFamily='Poppins'
          textAlign='left'
        >
          <p>
            Hello! My name is Yevhen and I enjoy creating things 
            that live on the internet. My interest in web development 
            started back in 2018 when I decided to take Python course
            at a <a href='https://www.uc3m.es/Inicio' className='text-[#5A3BF8]
            hover:text-[#5A3BC9] hover:underline' target='_blank'>university</a>.
          </p>
        </Text>
        <Text
          fontSize={21}
          fontWeight={500}
          fontFamily='Poppins'
          textAlign='left'
        >
          <p>
            After 3 years of studying Business Administration, I have decided 
            to reconvert into a developer to become more independent by
            following a 9 weeks coding <a href='https://4geeksacademy.com/es/inicio' 
            className='text-[#5A3BF8] hover:text-[#5A3BC9] hover:underline' target='_blank'>bootcamp</a>. 
            I am a highly driven and self starter and enjoy talking about new projects and
            responsibilities. Finding ways to grow and push myself is always a
            priority for both in professional settings or in my personal endeavors.
          </p>
        </Text>
        <Text
          fontSize={21}
          fontWeight={500}
          fontFamily='Poppins'
          textAlign='left'
        >
          <p>
            Recently I worked on a <a href='https://twitter.com/worksut_' className='text-[#5A3BF8]
            hover:text-[#5A3BC9] hover:underline' target='_blank'>startup</a> with designers and management team to develop a
            <a href='https://worksut.netlify.app/' className='text-[#5A3BF8] hover:text-[#5A3BC9] hover:underline' 
            target='_blank'> landing page</a> for the company. Currently I am looking for new opportunities, 
            so don't hesistate to reach out.
          </p>
        </Text>
        <div
          className='
          flex flex-row
          justify-center
          gap-14 pt-12'
        >
          <WrapperStyled>
            <Text
              fontFamily='Share Tech Mono'
              fontSize={32}
            >
              <p>4+</p>
            </Text>
            <Text
              fontFamily='Poppins'
              fontSize={16}
              textAlign='center'
            >
              <p>years of experience</p>
            </Text>
          </WrapperStyled>
          <WrapperStyled>
            <Text
              fontFamily='Share Tech Mono'
              fontSize={32}
            >
              <p>30+</p>
            </Text>
            <Text
              fontFamily='Poppins'
              fontSize={16}
            >
              <p>projects created</p>
            </Text>
          </WrapperStyled>
        </div>
      </div>
    </AboutTableStyled>
  )
}

export default AboutTable