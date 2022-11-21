import * as React from 'react'
import { TextStyled, Props as HeaderProps } from './TextStyled'

interface Props
  extends HeaderProps {
    children: React.ReactNode
  }

const Text: React.FC<Props> = (props) => {
  return (
    <TextStyled {...props}>
      {props.children}
    </TextStyled>
  )
}

export default Text