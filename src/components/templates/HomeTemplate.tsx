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
import Link from '@molecules/Link/Link'

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
                var title = window.document.getElementById('contact')

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
      >
        <ExperienceTable />
        <SkillsTable />
        {/* <div
          className='
          flex flex-col
          justify-center
          items-center
          pb-[4rem]'
        >
          <div
            className='
            pt-[10rem]
            pb-[3rem]
            text-center
            flex
            flex-col
            gap-[2rem]
            items-center'
            id='about'
          > */}
            {/* <Text 
              color='black'
              fontSize={52}  
              fontFamily='Poppins'
              fontWeight={900}
              lineHeight='1.25'
              zIndex={9}
            >
              About Me
            </Text>
            <Text
              color='black'
              fontSize={21}
              fontWeight={500}
              fontFamily='Poppins'
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
            <div
              className='
              flex
              flex-row
              justify-around
              pt-[8rem]
              items-center
              w-[90vw]
              min-[1736px]:w-[80vw]'
              id='contact'
            >
              <Image 
                src={losTercios}
                alt='Worksut'
                className='
                w-[10rem]
                object-cover'
              />
              <Image 
                src={upwork}
                alt='Worksut'
                className='
                w-[8rem]
                object-cover'
              />
              <Image 
                src={dooboolab}
                alt='Worksut'
                className='
                w-[6rem]
                object-cover'
              />
              <Background 
                position='relative'
                width='10rem'
                height='1.7rem'
                background='url(../../../static/img/cgSpark.svg)'
              />
              <Background 
                position='relative'
                width='12rem'
                height='3rem'
                background='url(../../../static/img/norteHispana.svg)'
              />
            </div> */}
          {/* </div>
        </div> */}
        {/* <div
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
              title='Get in touch'
              buttonTitle='Contact me'
            />
            <div
              className='
              pt-[10rem]
              flex
              flex-col
              gap-[2rem]
              items-center'
            >
              <Text 
                color='black'
                fontSize={52}  
                fontFamily='Poppins'
                fontWeight={900}
                lineHeight='1.25'
                zIndex={9}
              >
                What is next?
              </Text>
              <Text
                color='black'
                fontSize={21}
                fontWeight={500}
                fontFamily='Poppins'
                width='60rem'
                textAlign='center'
              >
                My inbox is always open. Whether you have a question or 
                just want to say hi, I will always get back to you! Reach out 
                and let's build amaizing experiences together!
              </Text>
              <Link
                fontFamily='Poppins'
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
                flex
                flex-row
                w-[100%]
                justify-around
                pt-[10rem]
                pb-[4rem]'
                id='work'
              >
                 {projectImageItems.map((item: ProjectImageItemsProps) => (
                  <ProjectImage
                    key={item.id} 
                    myKey={item.id}
                    background={item.background}
                    top={item.top}
                    left={item.left}
                    right={item.right}
                    zIndex={item.zIndex}
                    title={item.title}
                    href={item.href}
                  />
                 ))}
              </div>
              <Footer />
            </div>
          </div>
        </div> */}
      </div>
      <div
        className='
        py-12'
      >
        <Carousel />
      </div>
    </main>
  )
}

export default HomeTemplate