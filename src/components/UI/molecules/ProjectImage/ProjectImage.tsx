import { ProjectImageStyled, Props as ProjectImageProps } from './ProjectImageStyled'

interface Props
  extends ProjectImageProps {
    myKey: number,
    href?: string
  }

const ProjectImage: React.FC<Props> = (props) => {
  return (
    <a href={props.href} target='_blank'>
      <ProjectImageStyled {...props}/>
    </a>
  )
}

export default ProjectImage