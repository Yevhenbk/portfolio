import * as React from 'react'
import { LinkStyled, Props as LinkStyledProps } from './LinkStyled'

interface Props
  extends LinkStyledProps {
    myKey?: number,
    children: React.ReactNode,
    href?: string
  }

const Link: React.FC<Props> = (props) => {
  return (
    <LinkStyled 
      key={props.myKey}
      href={props.href}
      target='_blank'
      {...props}
    >
      {props.children}  
    </LinkStyled>
  )
}

export default Link