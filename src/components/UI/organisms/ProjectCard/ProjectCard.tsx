import Text from '@atoms/Text/Text'
import { CardStyled, WrapperStyled, Props as CardStyledProps } from './ProjectCardStyled'
import { IconWrapperStyled, 
  Props as IconWrapperProps } from './ProjectCard.Helper'
import { useSpring, config } from 'react-spring'
import { GoLinkExternal } from 'react-icons/go'
import { RiGoogleFill } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiSolidity, SiEthereum,
  SiSass, SiBootstrap, SiTypescript, SiStyledcomponents,
  SiAzuredevops, SiPython, SiFlask, SiMysql, SiPostgresql,
  SiStrapi, SiMaterialui} from 'react-icons/si'

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
    isPostgres?: boolean,
    isMaterialui?: boolean
  }

const IconWrapper: React.FC<IconWrapperProps> = (props) => {
  return (
    <IconWrapperStyled>
      {props.children}
    </IconWrapperStyled>
  )
}  

const calc = (x: any, y: any) => [-(y - window.innerHeight / 1.5) / 40, (x - window.innerWidth / 1.5) / 40, 1]
const trans = (x: any, y: any, s: any) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

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
          color='#616161'
          fontSize={16}
          fontWeight={500}
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
            flex-wrap
            justify-start
            items-center
            gap-[1rem]
            pt-[1rem]'
          >
            {props.isReact ? 
            <IconWrapper>
              <FaReact />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                React.js
              </Text>
            </IconWrapper> 
            : <></>}
            {props.isNext ?
            <IconWrapper>
              <SiNextdotjs />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Next.js
              </Text>
            </IconWrapper>
            : <></>}
            {props.isTypeScript ?
            <IconWrapper>
              <SiTypescript className='rounded-xl' />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                TypeScript
              </Text>
            </IconWrapper>
            : <></>}
            {props.isSass ?
            <IconWrapper>
              <SiSass />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                SASS
              </Text>
            </IconWrapper>
            : <></>}
            {props.isBootstrap ?
            <IconWrapper>
              <SiBootstrap />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Bootstrap
              </Text>
            </IconWrapper>
            : <></>}
            {props.isAzure ?
            <IconWrapper>
              <SiAzuredevops />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Azure
              </Text>
            </IconWrapper>
            : <></>}
            {props.isTailwind ?
            <IconWrapper>
              <SiTailwindcss />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                TailwindCSS
              </Text>
            </IconWrapper>
            : <></>}
            {props.isMaterialui ?
            <IconWrapper>
              <SiMaterialui />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                MUI
              </Text>
            </IconWrapper>
            : <></>}
            {props.isStyledComponents ?
            <IconWrapper>
              <SiStyledcomponents />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                styled-components
              </Text>
            </IconWrapper>
            : <></>}
            {props.isPython ?
            <IconWrapper>
              <SiPython />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Python
              </Text>
            </IconWrapper>
            : <></>}
            {props.isFlask ?
            <IconWrapper>
              <SiFlask />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Flask
              </Text>
            </IconWrapper>
            : <></>}
            {props.isSQL ? 
            <IconWrapper>
              <SiMysql />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                MySQL
              </Text>
            </IconWrapper>
            : <></>}
            {props.isPostgres ?
            <IconWrapper>
              <SiPostgresql />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Postgresql
              </Text>
            </IconWrapper>
            : <></>}
            {props.isSolidity ? 
            <IconWrapper>
              <SiSolidity />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Solidity
              </Text>
            </IconWrapper>
            : <></>}
            {props.isEthereum ?
            <IconWrapper>
              <SiEthereum />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Ethers.js
              </Text>
            </IconWrapper>
            : <></>}
            {props.isStrapi ?
            <IconWrapper>
              <SiStrapi />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Strapi
              </Text>
            </IconWrapper>
            : <></>}
            {props.isGoogle ? 
            <IconWrapper>
              <RiGoogleFill />
              <Text
                fontFamily='Share Tech Mono, sans'
                fontSize={10}
              >
                Google API
              </Text>
            </IconWrapper>
            : <></>}
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