import { IconStyled, Props as IconStyledProps } from './IconStyled'

interface Props
  extends IconStyledProps {
    children: React.ReactNode,
    className?: string
  }

const Icon: React.FC<Props> = (props) => {
  return (
    <IconStyled
      className={props.className}
      {...props}
    >
      {props.children}  
    </IconStyled>
  )
}

export default Icon