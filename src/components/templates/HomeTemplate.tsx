import * as React from 'react'
import Layout from '../Layout'
import Navbar from '@organisms/Navbar/Navbar'
import Text from '@atoms/Text/Text'
import Button from '@molecules/Button/Button'
import Iframe from '@atoms/Iframe/Iframe'
import Icon from '@atoms/Icon/Icon'
import SkillsTable from '@organisms/SkillsTable/SkillsTable'
import ExperienceTable from '@organisms/ExperienceTable/ExperienceTable'
import { RiMessage2Line } from 'react-icons/ri'
import Carousel from '@organisms/Carousel/Carousel'
import AboutTable from '@organisms/AboutTable/AboutTable'
import Footer from '@organisms/Footer/Footer'
import Mailto from '@organisms/Mailto/Mailto'

const HomeTemplate: React.FC = () => {

  return (
    <main>
      <Layout title='Portfolio | Yevhenbk' />
      <Navbar />  
      <div
        className='
        flex flex-row
        justify-around
        items-center'
      >
        <Iframe />
        <div 
          className='
          flex flex-col gap-5
          w-[35rem] absolute 
          top-48 left-32
          min-[1736px]:top-[16rem] 
          min-[1736px]:left-60'
        >
          <Text
            color='black'
            fontSize={21}
            fontWeight={500}
            fontFamily='Poppins'
          >
            <p>Hey there! My name is</p>
          </Text>
          <div>
            <Text
              color='black'
              fontSize={52}
              fontFamily='Poppins'
              fontWeight={900}
              lineHeight='1.25'
            >
              <h1>Yevhen Balahutrak.</h1>
            </Text>
            <Text
              color='black'
              fontSize={52}
              fontFamily='Poppins'
              fontWeight={900}
              lineHeight='1.25'
            >
              <h1>I build unique things for the web.</h1>
            </Text>
          </div>
          <Text
            color='black'
            fontSize={21}
            fontWeight={500}
            fontFamily='Poppins'
          >
            <p>
              I’m a software engineer with over 4 years of
              experience specializing in building 
              and designing exceptional digital experiences.
            </p>
          </Text>
          <Button
            color='white'
            background='linear-gradient(to left, #D446E2, #5A3BF8)'
            radius={50}
            fontFamily='Poppins'
            fontWeight={500}
            padding='.5rem 1.5rem'
            fontSize={18}
            margin='1.5rem 0 0'
            isAnimated={false}
            display='flex'
            flexDirection='row'
            justify='space-between'
            items='center'
            width='12.5rem'
            hoverBackground='#D446E2'
            onClick={() => {
              if (typeof window != 'undefined') {
                var title = window.document.getElementById('about')

                if (title != null) {
                  title.scrollIntoView({behavior:'smooth'})
                }
              }
            }}
          >
            Contact me
            <Icon 
              width={35}
              height={35}
              padding='0.5rem'
              borderRadius='50%'
              position='relative'
              right='-1rem'
              fontSize='1.125rem'
              color='white'
              isAnimated={true}
            >
              <RiMessage2Line />
            </Icon>
          </Button>
        </div>
      </div>
      <div
        className='
        mt-[54rem] 
        min-[1736px]:mt-[62rem]
        grid grid-cols-3 gap-8
        p-8 w-[100vw] overflow-hidden'
        id='skills'
      >
        <ExperienceTable />
        <SkillsTable />
      </div>
      <div
        id='work'
      >
        <Carousel />
      </div>
      <div
        className='
        grid grid-cols-1 
        p-8'
        id='about'
      >
        <AboutTable />
      </div>
      <div
        className='
        pt-14 pb-28'
        id='contact'
      >
        <Mailto />
      </div>
      <Footer />
      <div
        className='
        flex flex-row
        justify-between
        items-center mt-24 
        mb-12'
      >
        <div 
          className='
          h-[.15rem]
          w-[36vw] bg-[#adadadc5]'
        />
        <Text
          fontSize={16}  
          fontFamily='Share Tech Mono'
          fontWeight={400}
        >
          <p>Designed and built by Yevhen Balahutrak ® 2022</p>
        </Text>
        <div 
          className='
          h-[.15rem]
          w-[36vw] bg-[#adadadc5]'
        />
      </div>
    </main>
  )
}

export default HomeTemplate