import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  isWhite: boolean 
}

export const NavbarStyled = styled.div((props: Props) => [
  props.isWhite ? 
  tw`
    bg-white/30
    backdrop-blur-sm` : 
  tw`
    bg-transparent`,
  tw`
    w-[100%]
    p-5
    fixed
    top-0
    flex
    flex-row
    items-center 
    justify-between
    ease-in 
    duration-200`  
])