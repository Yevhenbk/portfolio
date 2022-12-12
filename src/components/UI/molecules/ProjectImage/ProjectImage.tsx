import { ProjectImageStyled, Props as ProjectImageProps } from './ProjectImageStyled'

interface Props
  extends ProjectImageProps {
    myKey: number
  }

const ProjectImage: React.FC<Props> = (props) => {
  return (
    <ProjectImageStyled {...props}/>
  )
}

export default ProjectImage