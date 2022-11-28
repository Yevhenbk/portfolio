import { IconStyled, Props as IconStyledProps } from './IconStyled'

interface Props
  extends IconStyledProps {
    children: React.ReactNode
  }

const Icon: React.FC<Props> = (props) => {
  return (
    <IconStyled {...props}>
      {props.children}  
    </IconStyled>
  )
}

export default Icon