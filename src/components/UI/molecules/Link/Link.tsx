import * as React from 'react'
import { LinkStyled, Props as LinkStyledProps } from './LinkStyled'

interface Props
  extends LinkStyledProps {
    children: React.ReactNode,
  }

const Link = (props: Props) => {
  return (
    <LinkStyled {...props}>
      {props.children}  
    </LinkStyled>
  )
}

export default Link