import * as React from 'react'
import { LinkStyled, Props as LinkStyledProps } from './LinkStyled'

interface Props
  extends LinkStyledProps {
    myKey?: number,
    children: React.ReactNode,
  }

const Link: React.FC<Props> = (props) => {
  return (
    <LinkStyled 
      key={props.myKey}
      {...props}
    >
      {props.children}  
    </LinkStyled>
  )
}

export default Link