import * as React from 'react'
import Layout from '../Layout'
import Navbar from '@organisms/Navbar/Navbar'
import Wrapper from '@atoms/Wrapper/Wrapper'
import Text from '@atoms/Text/Text'
import Button from '@molecules/Button/Button'
import Iframe from '@atoms/Iframe/Iframe'
import Link from '@molecules/Link/Link'
import Icon from '@atoms/Icon/Icon'
import ProjectCard from '@molecules/ProjectCard/ProjectCard'
import Background from '@atoms/Background/Background'
import { RiMessage2Line } from 'react-icons/ri'

const HomeTemplate: React.FC = () => {
  return (
    <main>
      <Layout title='Portfolio | Yevhenbk' />
      <Navbar />  
      <Wrapper
        justifyContent='space-around'
        direction='row'
        alignItems='center'
      >
        <Iframe />
        <div 
          className='
          w-[45rem] absolute 
          top-40 left-32
          min-[1736px]:top-[16rem] 
          min-[1736px]:left-60'
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
            width='13rem'
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
              className='
              group-hover:rotate-[-45deg]'
              isAnimated={true}
            >
              <RiMessage2Line />
            </Icon>
          </Button>
        </div>
      </Wrapper>
      <div
        className='
        pt-[52rem] 
        2xl:pt-[57rem]'
      >
        <Wrapper
          justifyContent='center'
          direction='column'
          alignItems='center'
          padding='0 0 4rem'
        >
          <div className='w-0 h-0'>
            <Background 
              top='55rem'
              background='url(../../../static/img/circles.svg)'
            />
          </div>
          <Text 
            color='black'
            fontSize={60}  
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
            zIndex={9}
          >
            My latest works
          </Text>
          <Text 
            color='black'
            fontSize={21}
            fontWeight={600}
            fontFamily='Poppins, serif'
            lineHeight='2.5'
            zIndex={9}
          >
            *Includes my personal, and professional projects*
          </Text>
          <Link
            fontFamily='Poppins, serif'
            borderRadius='50px'
            border='1px solid black'
            padding='.35rem 1rem'
            hoverBackground='black'
            hoverColor='white'
            isAnimated={true}
            href='https://github.com/Yevhenbk'
          >
            See all the works
          </Link>
          <div
            className='
            flex
            flex-row
            justify-around
            items-center
            w-[100%]
            pt-[4rem]
            2xl:w-[80vw]'
          >
            <ProjectCard
              href='https://cloudchain.vercel.app'
            />
            <ProjectCard
              href='https://github.com/Yevhenbk/los-tercios'
            />
            <ProjectCard 
              href='https://github.com/Yevhenbk/worksut-landing'
            />
          </div>
        </Wrapper>
      </div>
    </main>
  )
}

export default HomeTemplate