import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {
  isWhite?: boolean,
  width?: string 
}

export const NavbarStyled = styled.div((props: Props) => [
  props.isWhite ? tw`bg-white/70 backdrop-blur-sm` 
  : tw`bg-transparent`,
  tw`w-[100%]
     py-5
     fixed
     top-0
     flex
     flex-row
     items-center 
     justify-around
     ease-in 
     duration-200
     z-40`  
])

export const DivStyled = styled.div((props: Props) => [
  tw`flex
     flex-row
     justify-between
     items-center`,
     `width: ${props.width};`
])