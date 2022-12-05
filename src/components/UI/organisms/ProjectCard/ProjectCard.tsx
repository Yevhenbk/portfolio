import Text from '@atoms/Text/Text'
import { CardStyled, WrapperStyled, Props as CardStyledProps } from './ProjectCardStyled'
import { useSpring, config } from 'react-spring'
import { GoLinkExternal } from 'react-icons/go'
import { RiGoogleFill } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiSolidity, SiEthereum,
  SiSass, SiBootstrap, SiTypescript, SiStyledcomponents,
  SiAzuredevops, SiPython, SiFlask, SiMysql, SiPostgresql,
  SiStrapi } from 'react-icons/si'

interface Props
  extends CardStyledProps {
    myKey: number,
    href?: string,
    name: string,
    description: string,
    headerColor: string,
    isReact?: boolean,
    isNext?: boolean,
    isTypeScript?: boolean,
    isTailwind?: boolean,
    isStyledComponents?: boolean,
    isSolidity?: boolean,
    isGoogle?: boolean,
    isAzure?: boolean,
    isPython?: boolean,
    isFlask?: boolean,
    isSQL?: boolean,
    isSass?: boolean,
    isStrapi?: boolean,
    isBootstrap?: boolean,
    isEthereum?: boolean,
    isPostgres?: boolean
  }

const calc = (x: any, y: any) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1]
const trans = (x: any, y: any, s: any) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ProjectCard: React.FC<Props> = (props) => {

  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))  
  
  return (
    <CardStyled
      key={props.myKey}
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
            items-center
            gap-[1rem]
            pt-[1rem]'
          >
            {props.isReact ? <FaReact /> : <></>}
            {props.isNext ? <SiNextdotjs /> : <></>}
            {props.isTypeScript ? <SiTypescript /> : <></>}
            {props.isSass ? <SiSass /> : <></>}
            {props.isBootstrap ? <SiBootstrap /> : <></>}
            {props.isAzure ? <SiAzuredevops /> : <></>}
            {props.isTailwind ? <SiTailwindcss /> : <></>}
            {props.isStyledComponents ? <SiStyledcomponents className='text-3xl' /> : <></>}
            {props.isPython ? <SiPython /> : <></>}
            {props.isReact ? <SiFlask /> : <></>}
            {props.isSQL ? <SiMysql className='text-2xl' /> : <></>}
            {props.isPostgres ? <SiPostgresql /> : <></>}
            {props.isSolidity ? <SiSolidity /> : <></>}
            {props.isEthereum ? <SiEthereum /> : <></>}
            {props.isStrapi ? <SiStrapi /> : <></>}
            {props.isGoogle ? <RiGoogleFill /> : <></>}
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