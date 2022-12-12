import * as React from 'react'
import { WrapperStyled, 
    Props as WrapperStyledProps } from './WrapperStyled'

interface Props
  extends WrapperStyledProps {
    children: React.ReactNode,
    id?: string
  }    


const Wrapper: React.FC<Props> = (props) => {
  return (
    <WrapperStyled 
      id={props.id}
      {...props}
    >
      {props.children}
    </WrapperStyled>
  )
}

export default Wrapper