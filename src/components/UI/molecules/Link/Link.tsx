import * as React from 'react'
import { LinkStyled, Props as LinkStyledProps } from './LinkStyled'

interface Props
  extends LinkStyledProps {
    children: React.ReactNode,
  }

const Link: React.FC<Props> = (props) => {
  return (
    <LinkStyled {...props}>
      {props.children}  
    </LinkStyled>
  )
}

export default Link