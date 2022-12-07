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
import { projectCardItems, Props as ProjectCardItemsProps } from '../../../static/utils/ProjectCardItems'
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
            grid
            grid-cols-3
            justify-items-center
            w-[100%]
            pt-[4rem]
            gap-x-[2rem]
            gap-y-[5rem]
            min-[1736px]:w-[80vw]'
          >
            {projectCardItems.map((item: ProjectCardItemsProps) => (
              <ProjectCard 
                key={item.id}
                myKey={item.id}
                name={item.name}
                description={item.description}
                headerColor={item.headerColor}
                href={item.href}
                isReact={item.isReact}
                isNext={item.isNext}
                isTypeScript={item.isTypeScript}
                isSass={item.isSass}
                isBootstrap={item.isBootstrap}
                isTailwind={item.isTailwind}
                isStyledComponents={item.isStyledComponents}
                isMaterialui={item.isMaterialui}
                isAzure={item.isAzure}
                isGoogle={item.isGoogle}
                isPython={item.isPython}
                isFlask={item.isFlask}
                isSQL={item.isSQL}
                isPostgres={item.isPostgres}
                isSolidity={item.isSolidity}
                isEthereum={item.isEthereum}
                isStrapi={item.isStrapi}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    </main>
  )
}

export default HomeTemplate