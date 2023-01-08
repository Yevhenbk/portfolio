import * as React from 'react'
import { CarouselStyled } from './CarouselStyled'
import { IconWrapperStyled,
  Props as IconWrapperStyledProps } from './Carousel.Helper'
import ProjectCard from '@organisms/ProjectCard/ProjectCard'
import { projectCardItems,
  Props as ProjectCardItemsProps } from '../../../../../static/utils/ProjectCardItems'
import Text from '@atoms/Text/Text'
import Link from '@molecules/Link/Link'

const IconWrapper: React.FC<IconWrapperStyledProps> = (props) => {
  return (
    <IconWrapperStyled 
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}  
    </IconWrapperStyled>
  )  
}

const Carousel: React.FC = () => {

  let [number, setNumber] = React.useState<number>(0)  

  return (
    <>
      <div
        className='
        absolute right-[2rem]
        top-[137rem] z-30
        min-[1736px]:top-[145rem]'
      >
        <IconWrapper
          onClick={() => setNumber(number+=1)}
          style={number >= 2 ? {display: 'none'} 
          : {display: 'flex'}}
        >
          {'>'}
        </IconWrapper>
      </div>  
      <div
        className='
        absolute left-[2rem]
        top-[137rem] z-30
        min-[1736px]:top-[145rem]'
        style={number <= 0 ? {display: 'none'}
        : {display: 'flex'}}
      >
        <IconWrapper
          onClick={() => setNumber(number-=1)}
        >
          {'<'}
        </IconWrapper>
      </div>  
      <CarouselStyled
        style={number === 1 ? {left: '-41rem'} 
        : number === 2 ? {left: '-125rem'} : {left: '0'}}
      >
        <div
          className='
          text-left pl-12
          flex flex-col
          gap-12 pr-12'
        >
          <Text
            fontFamily='Poppins'
            fontSize={36}
            fontWeight={900}
            lineHeight='1.25'
            width='26rem'
          >
            Some of my personal 
            & professional works
          </Text>
          <Text
            fontSize={21}
            fontWeight={500}
            fontFamily='Poppins'
            width='32rem'
          >
            Check out my GitHub to see 
            more up to date projects. 
          </Text>
          <div
            className='
            w-[166px]'
          >
            <Link
              fontFamily='Poppins'
              borderRadius='50px'
              border='1px solid black'
              padding='.35rem 1rem'
              hoverBackground='black'
              hoverColor='white'
              isAnimated={true}
              href='https://github.com/Yevhenbk?tab=repositories'
            >
              View the archive
            </Link>
          </div>
        </div>
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
            isTailwind={item.isTailwind}
            isStyledComponents={item.isStyledComponents}
            isSolidity={item.isSolidity}
            isGoogle={item.isGoogle}
            isAzure={item.isAzure}
            isPython={item.isPython}
            isFlask={item.isFlask}
            isSQL={item.isSQL}
            isSass={item.isSass}
            isStrapi={item.isStrapi}
            isBootstrap={item.isBootstrap}
            isEthereum={item.isEthereum}
            isPostgres={item.isPostgres}
            isMaterialui={item.isMaterialui}
          />
        ))}
      </CarouselStyled>
    </>
  )
}

export default Carousel