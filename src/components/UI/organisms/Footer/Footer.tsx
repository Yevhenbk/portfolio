import { FooterStyled } from './FooterStyled'
import Text from '@atoms/Text/Text'
import ProjectImage from '@molecules/ProjectImage/ProjectImage'
import { projectImageItems,
  Props as ProjectImageItemsProps } from '../../../../../static/utils/ProjectImageItems'

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      {projectImageItems.map((item: ProjectImageItemsProps) => (
        <ProjectImage 
          key={item.id}
          myKey={item.id}
          title={item.title}
          background={item.background}
          top={item.top}
          right={item.right}
          left={item.left}
          zIndex={item.zIndex}
          href={item.href}
        />
      ))}
    </FooterStyled>
  )
}

export default Footer