import * as React from 'react'
import Layout from '../Layout'
import Navbar from '@organisms/Navbar/Navbar'
import Wrapper from '@atoms/Wrapper/Wrapper'
import Text from '@atoms/Text/Text'
import Button from '@molecules/Button/Button'
import Iframe from '@atoms/Iframe/Iframe'
import Icon from '@atoms/Icon/Icon'
import { GrContact } from 'react-icons/gr'

const HomeTemplate: React.FC = () => {
  return (
    <main>
      <Layout title='Portfolio | Yevhenbk' />
      <Navbar />  
      <Wrapper
        justify='space-around'
        direction='row'
        align='center'
      >
        <Iframe />
        <div 
          className='
          w-[45rem] absolute 
          top-40 left-32
          min-[1736px]:top-[16rem] min-[1736px]:left-60'
        >
          <Text
            color='black'
            fontSize={21}
            fontWeight={600}
            fontFamily='Poppins, serif'
          >
            <p>Hey there! My name is</p>
          </Text>
          <Text
            color='black'
            fontSize={60}
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
          >
            <h1>Yevhen Balahutrak.</h1>
          </Text>
          <Text
            color='rgba(0, 0, 0, 0.65)'
            fontSize={60}
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
            isLinear={true}
          >
            <h1>I build unique things for the web.</h1>
          </Text>
          <Text
            color='black'
            fontSize={21}
            fontWeight={600}
            fontFamily='Poppins, serif'
            width='30rem'
          >
            <p>
              I’m a software engineer specializing in building 
              (and occasionally designing)
              exceptional digital experiences.
            </p>
          </Text>
          <Button
            color='white'
            background='black'
            radius={50}
            fontFamily='Poppins, serif'
            fontWeight={500}
            padding='.5rem 1.5rem'
            fontSize={18}
            margin='2rem 0 0'
            isAnimated={true}
            display='flex'
            flexDirection='row'
            justify='space-between'
            items='center'
            width='14rem'
          >
            Contact me
            <Icon 
              background='white'
              width={34}
              height={34}
              padding='0.5rem'
              borderRadius='50%'
              position='relative'
              right='-1rem'
              fontSize='1.125rem'
              color='black'
            >
              <GrContact />
            </Icon>
          </Button>
        </div>
      </Wrapper>
    </main>
  )
}

export default HomeTemplate