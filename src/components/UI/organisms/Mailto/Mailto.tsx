import { MailtoStyled } from './MailtoStyled'
import { useSpring, config } from 'react-spring'
import Text from '@atoms/Text/Text'
import Button from '@molecules/Button/Button'

interface Props {
  title: string,
  buttonTitle: string  
}

const calc = (x: any, y: any) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1]
const trans = (x: any, y: any, s: any) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Mailto: React.FC<Props> = (props) => {

  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default})) 

  return (
    <MailtoStyled
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: prop.xys.interpolate(trans)
      }}
    >
      <Text
        color='black'
        fontFamily='Poppins, serif'
        fontWeight={700}
        fontSize={32}
      >
        {props.title}
      </Text>
      <Button
        color='white'
        background='#5A3BF8'
        hoverBackground='transparent'
        hoverColor='#5A3BF8'
        border='1px solid #5A3BF8'
        fontSize={21}
        fontFamily='Share Tech Mono, serif'
        padding='.25rem 2rem'
        radius={3}
        isAnimated={true}
        onClick={() => global.location.href = 'mailto:balagutrak.jenia@gmail.com'}
      >
        {props.buttonTitle}
      </Button>  
    </MailtoStyled>
  )
}

export default Mailto