import * as React from 'react'
import { ButtonStyled, Props as ButtonStyledProps } from './ButtonStyled'

interface Props
  extends ButtonStyledProps {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler,
    className?: string
  }

const Button: React.FC<Props> = (props) => {
  return (
    <ButtonStyled 
      onClick={props.onClick} 
      className={props.className}
      {...props}
    >
      {props.children}
    </ButtonStyled>
  )
}

export default Button