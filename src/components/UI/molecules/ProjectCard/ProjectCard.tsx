import { CardStyled, Props as CardStyledProps } from './ProjectCardStyled'
import { useSpring, config } from 'react-spring'

interface Props
  extends CardStyledProps {
    children?: React.ReactNode,
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
      {...props}
    >
      {props.children}
    </CardStyled>
  )
}

export default ProjectCard