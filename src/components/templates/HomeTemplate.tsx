import * as React from 'react'
import Layout from '../Layout'
import Navbar from '@organisms/Navbar/Navbar'
import Wrapper from '@atoms/Wrapper/Wrapper'
import Text from '@atoms/Text/Text'
import Button from '@molecules/Button/Button'
import Iframe from '@atoms/Iframe/Iframe'
import { GrContact } from 'react-icons/gr'
import { BiLinkExternal } from 'react-icons/bi'

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
        <div className='w-[45rem] absolute top-40 left-20
        2xl:top-[16rem] 2xl:left-60'>
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
            width='13rem'
            hoverWidth='15rem'
            className='group'
          >
            Contact me
            <span 
              className='
              bg-white
              w-[34px] h-[34px]
              p-2 rounded-full
              relative -right-4
              transition
              ease-in-out
              duration-300 
              group-hover:transition 
              group-hover:ease-in-out
              group-hover:duration-300
              group-hover:rotate-90'>
                <GrContact 
                  className='
                  text-lg
                  text-black 
                  group-hover:hidden
                  '
                />
                <BiLinkExternal 
                  className='
                  hidden
                  text-lg
                  text-black 
                  -rotate-90
                  group-hover:block
                  '
                />
            </span>
          </Button>
        </div>
      </Wrapper>
    </main>
  )
}

export default HomeTemplate