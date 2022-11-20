import * as React from 'react'
import { TextStyled, Props as HeaderProps } from './TextStyled'

export interface Props
  extends HeaderProps {
    children: React.ReactNode
  }

const Text = (props: Props) => {
  return (
    <TextStyled {...props}>
      {props.children}
    </TextStyled>
  )
}

export default Text