import * as React from 'react'
import { TextStyled, Props as HeaderProps } from './TextStyled'

interface Props
  extends HeaderProps {
    children: React.ReactNode,
    isHeader: boolean
  }

const Text: React.FC<Props> = (props) => {
  return (
    <TextStyled {...props}>
      {props.isHeader ?
        <h1>{props.children}</h1> :
        <p>{props.children}</p>
      }
    </TextStyled>
  )
}

export default Text