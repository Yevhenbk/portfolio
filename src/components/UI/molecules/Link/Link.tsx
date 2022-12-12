import * as React from 'react'
import { LinkStyled, Props as LinkStyledProps } from './LinkStyled'

interface Props
  extends LinkStyledProps {
    myKey?: number,
    children: React.ReactNode,
    href?: string,
    onClick?: React.MouseEventHandler
  }

const Link: React.FC<Props> = (props) => {
  return (
    <LinkStyled 
      key={props.myKey}
      href={props.href}
      onClick={props.onClick}
      target='_blank'
      {...props}
    >
      {props.children}  
    </LinkStyled>
  )
}

export default Link