import { BackgroundStyled, Props as BackgroundStyledProps } from './BackgroundStyled'

const Background: React.FC<BackgroundStyledProps> = (props) => {
  return (
    <BackgroundStyled {...props} />
  )
}

export default Background