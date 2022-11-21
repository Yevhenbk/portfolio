import * as React from 'react'
import { WrapperStyled, 
    Props as WrapperStyledProps } from './WrapperStyled'

interface Props
  extends WrapperStyledProps {
    children: React.ReactNode
  }    


const Wrapper: React.FC<Props> = (props) => {
  return (
    <WrapperStyled {...props}>
      {props.children}
    </WrapperStyled>
  )
}

export default Wrapper