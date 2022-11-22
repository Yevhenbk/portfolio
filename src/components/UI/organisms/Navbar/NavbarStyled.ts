import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {
  isWhite: boolean 
}

export const NavbarStyled = styled.div((props: Props) => [
  props.isWhite ? tw`bg-white/30 backdrop-blur-sm` 
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
     z-20`  
])

export const DivStyled = tw.div`
  flex
  flex-row
  justify-between
  w-[30rem]
`