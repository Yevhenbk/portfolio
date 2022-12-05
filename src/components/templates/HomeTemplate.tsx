import * as React from 'react'
import Layout from '../Layout'
import Navbar from '@organisms/Navbar/Navbar'
import Wrapper from '@atoms/Wrapper/Wrapper'
import Text from '@atoms/Text/Text'
import Button from '@molecules/Button/Button'
import Iframe from '@atoms/Iframe/Iframe'
import Link from '@molecules/Link/Link'
import Icon from '@atoms/Icon/Icon'
import ProjectCard from '@organisms/ProjectCard/ProjectCard'
import Background from '@atoms/Background/Background'
import { RiMessage2Line, RiGoogleFill } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiSolidity, SiEthereum,
  SiSass, SiBootstrap, SiTypescript, SiStyledcomponents,
  SiAzuredevops, SiPython, SiFlask, SiMysql, SiPostgresql,
  SiStrapi } from 'react-icons/si'

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
          w-[35rem] absolute 
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
            fontSize={52}
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
          >
            <h1>Yevhen Balahutrak.</h1>
          </Text>
          <Text
            color='black'
            fontSize={52}
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
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
            background='linear-gradient(to left, #D17F82, #5A3BF8)'
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
            hoverBackground='linear-gradient(to left, #D17F82, #9B60B8)'
          >
            Contact me
            <Icon 
              background='white'
              width={35}
              height={35}
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
        min-[1736px]:pt-[57rem]'
      >
        <Wrapper
          justifyContent='center'
          direction='column'
          alignItems='center'
          padding='0 0 4rem'
        >
          <div className='w-0 h-0'>
            <Background 
              top='85rem'
              background='url(../../../static/img/waves.svg)'
            />
          </div>
          <Text 
            color='black'
            fontSize={52}  
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
            zIndex={9}
          >
            My recent works
          </Text>
          <Text 
            color='black'
            fontSize={21}
            fontWeight={600}
            fontFamily='Poppins, serif'
            lineHeight='2.5'
            zIndex={9}
          >
            *Includes my personal and professional projects*
          </Text>
          <Link
            fontFamily='Poppins, serif'
            borderRadius='50px'
            border='1px solid black'
            padding='.35rem 1rem'
            hoverBackground='black'
            hoverColor='white'
            isAnimated={true}
            margin='.5rem 0 0'
            href='https://github.com/Yevhenbk?tab=repositories'
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
            min-[1736px]:w-[80vw]'
          >
            <ProjectCard
              name='Cloudchain'
              headerColor='#9B60B8'
              description='Cloudchain is a web application where you can 
              transfer crypto assets all around the globe.'
              href='https://cloudchain.vercel.app'
              background='url(../../../static/img/bubblePurple.svg)'
            >
              <FaReact />
              <SiNextdotjs />
              <SiTypescript />
              <SiTailwindcss />
              <SiStyledcomponents className='text-3xl' />
              <SiSolidity />
              <SiEthereum />
            </ProjectCard>
            <ProjectCard
              name='Los Tercios'
              headerColor='#efa50e'
              description='Los Tercios is a fullstack project developed for 
              people getting familiar with weighlifting and are intersted 
              in lifting in Madrid.
              (Currently under construction)'
              href='https://github.com/Yevhenbk/los-tercios'
              background='url(../../../static/img/bubblePeach.svg)'
            >
              <FaReact />
              <SiTypescript />
              <SiSass />
              <SiBootstrap />
              <SiPython />
              <SiFlask />
              <SiMysql className='text-2xl' />
              <SiPostgresql />
            </ProjectCard>
            <ProjectCard 
              name='Worksut'
              headerColor='#FF524A'
              description='Responsive, fully animated desktop-only landing 
              page developed for Worksut startup.'
              href='https://worksut.netlify.app'
              background='url(../../../static/img/bubblePink.svg)'
            >
              <FaReact />
              <SiTypescript />
              <SiStyledcomponents className='text-3xl' />
              <SiAzuredevops />
            </ProjectCard>
          </div>
          <div
            className='
            flex
            flex-row
            justify-around
            items-center
            w-[100%]
            pt-[4rem]
            min-[1736px]:w-[80vw]'
          >
            <ProjectCard 
              name='Travel Advisor'
              headerColor='black'
              description='Travely is a web app that serves for providing top 
              rated places you’re willing to find depending on your location.'
              href='https://lamentable-record.surge.sh'
              background='url(../../../static/img/bubbleBlack.svg)'
            >
              <FaReact />
              <SiSass />
              <SiBootstrap />
              <RiGoogleFill />
            </ProjectCard>
            <ProjectCard 
              name='Technical Challenge'
              headerColor='#EE679F'
              description='Technical Challenge that consist of Calculator, Quotes API,
              and Metamask connect.'
              href='https://63347316ca969e094b51dbed--peppy-beijinho-1dd33a.netlify.app'
              background='url(../../../static/img/bubblePink.svg)'
            >
              <FaReact />
              <SiNextdotjs />
              <SiTypescript />
              <SiStyledcomponents className='text-3xl' />
              <SiEthereum />
            </ProjectCard>
            <ProjectCard 
              name='Marvel Characters'
              headerColor='#A71C21'
              description='This project is an app that is connected to an external APIs 
              and showing the result from it, which is marvel characters.'
              href='https://monumental-conkies-9acc89.netlify.app'
              background='url(../../../static/img/bubbleRed.svg)'
            >
              <FaReact />
              <SiStyledcomponents className='text-3xl' />
              <SiStrapi />
            </ProjectCard>
          </div>
        </Wrapper>
      </div>
    </main>
  )
}

export default HomeTemplate