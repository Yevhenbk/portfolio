import Text from '@atoms/Text/Text'
import { CardStyled, WrapperStyled, Props as CardStyledProps } from './ProjectCardStyled'
import { useSpring, config } from 'react-spring'
import { GoLinkExternal } from 'react-icons/go'

interface Props
  extends CardStyledProps {
    href?: string,
    name: string,
    description: string,
    children: React.ReactNode,
    headerColor: string
  }

const calc = (x: any, y: any) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1]
const trans = (x: any, y: any, s: any) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ProjectCard: React.FC<Props> = (props) => {

  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))  
  
  return (
    <CardStyled
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: prop.xys.interpolate(trans)
      }}
    >
      <WrapperStyled 
        href={props.href}
        target='_blank'
        {...props}
      >
        <div
          className='
          flex
          justify-center'
        >
          <Text
            color={props.headerColor}
            fontSize={38}  
            fontFamily='Poppins, serif'
            fontWeight={700}
            lineHeight='1.25'
            {...props}
          >
            {props.name}
          </Text>
        </div>
        <Text
          color='black'
          fontSize={18}
          fontWeight={400}
          fontFamily='Poppins, serif'
          lineHeight='1.5'
          {...props}
        >
          {props.description}
        </Text>
        <div>
          <Text
            color='black'
            fontSize={18}
            fontWeight={500}
            fontFamily='Poppins, serif'
            lineHeight='1.5'
          >
            Technologies used:
          </Text> 
          <div 
            className='
            flex
            flex-row
            justify-start
            gap-[1rem]
            pt-[1rem]'
          >
            {props.children}
          </div>
        </div>
        <Text
          color='black'
          fontSize={28}
          fontWeight={700}
          fontFamily='Poppins, serif'
          lineHeight='1.5'
        >
          <span 
            className='
            flex
            flex-row
            items-center'
          >
            View project 
            <GoLinkExternal 
              className='
              text-4xl
              ml-4'
            />
          </span>
        </Text>  
      </WrapperStyled>
    </CardStyled>
  )
}

export default ProjectCard