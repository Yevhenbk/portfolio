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
import ListItems from '@atoms/ListItems/ListItems'
import { ListItemStyled } from '@atoms/ListItems/ListItemsStyled'
import { projectCardItems, Props as ProjectCardItemsProps } from '../../../static/utils/ProjectCardItems'
import { skillsItems, Props as SkillsItemsProps } from '../../../static/utils/SkillsItems'
import { RiMessage2Line } from 'react-icons/ri'
import Mailto from '@organisms/Mailto/Mailto'

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
              I’m a software engineer with over 4 years of
              experience specializing in building 
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
              // className='
              // group-hover:rotate-[-45deg]'
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
            View the archive
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
                // background={item.background}
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
          <div
            className='
            flex
            flex-col
            items-center
            w-[100vw]
            pt-[12rem]
            min-[1736px]:w-[80vw]'
          >
            <Text
            color='black'
            fontSize={52}
            fontFamily='Poppins, serif'
            fontWeight={900}
            lineHeight='1.25'
            textAlign='start'
            >
              <h1>Skills</h1>
            </Text> 
            <Text 
              color='black'
              fontSize={21}
              fontWeight={600}
              fontFamily='Poppins, serif'
              lineHeight='2.5'
              zIndex={9}
              textAlign='center'
            >
              *List of my favourite technologies 
              I work with the most*
            </Text>
            <div
              className='
              flex
              flex-row
              justify-around
              w-[100%]
              pt-[4rem]'
            >
              {skillsItems.map((item: SkillsItemsProps) => (
                <ListItems 
                 title={item.title}>
                  <ListItemStyled>
                    {item.skillOne}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillTwo}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillThree}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillFour}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillFive}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillSix}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillSeven}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillEight}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillNine}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillTen}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillEleven}
                  </ListItemStyled>
                  <ListItemStyled>
                    {item.skillTwelve}
                  </ListItemStyled>
                 </ListItems>
              ))}
            </div>
          </div>
          <div
            className='
            pt-[12rem]
            pb-[12rem]
            text-center
            flex
            flex-col
            gap-[4rem]
            items-center'
          >
            <Text 
              color='black'
              fontSize={52}  
              fontFamily='Poppins, serif'
              fontWeight={900}
              lineHeight='1.25'
              zIndex={9}
            >
              About Me
            </Text>
            <Text
              color='#616161'
              fontSize={24}
              fontWeight={500}
              fontFamily='Poppins, serif'
              width='60rem'
              textAlign='center'
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
                so don't hesistate to reach out :)
              </p>
            </Text>
          </div>
        </Wrapper>
        <div
          className='
          flex
          flex-col
          items-center
          bg-[#e5e5e5]
          border-t-[1px]
          border-[#d0d0d0]'
        >
          <div
            className='
            relative
            -top-[2.5rem]
            flex
            flex-col
            items-center'
          >
            <Mailto 
              title='What is next?'
              buttonTitle='Contact me'
            />
            <div
              className='
              pt-[6rem]
              flex
              flex-col
              gap-[2rem]
              items-center'
            >
              <Text 
                color='black'
                fontSize={52}  
                fontFamily='Poppins, serif'
                fontWeight={900}
                lineHeight='1.25'
                zIndex={9}
              >
                Get in Touch
              </Text>
              <Text
                color='#616161'
                fontSize={24}
                fontWeight={500}
                fontFamily='Poppins, serif'
                width='60rem'
                textAlign='center'
              >
                My inbox is always open. Whether you have a question or 
                just want to say hi, I’ll try my best to get back to you!
              </Text>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeTemplate