import * as React from 'react'
import Layout from '../Layout'
import Navbar from '@organisms/Navbar/Navbar'
import Wrapper from '@atoms/Wrapper/Wrapper'
import Text from '@atoms/Text/Text'
import Button from '@molecules/Button/Button'
import Iframe from '@atoms/Iframe/Iframe'

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
        <div className='w-[35rem] absolute top-40 left-20'>
          <Text
            color='black'
            fontSize={18}
            fontWeight={500}
            fontFamily='Poppins, serif'
          >
            <p>Hey there,  my name is</p>
          </Text>
          <Text
            color='black'
            fontSize={52}
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
          >
            <h1>Yevhen Balahutrak.</h1>
          </Text>
          <Text
            color='rgba(0, 0, 0, 0.65)'
            fontSize={50}
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
          >
            <h1>I build unique things for the web.</h1>
          </Text>
          <Text
            color='black'
            fontSize={18}
            fontWeight={500}
            fontFamily='Poppins, serif'
            width='25rem'
          >
            <p>
              I’m a software engineer specializing in building (and occasionally designing)
              exceptional digital experiences.
            </p>
          </Text>
        </div>
      </Wrapper>
    </main>
  )
}

export default HomeTemplate