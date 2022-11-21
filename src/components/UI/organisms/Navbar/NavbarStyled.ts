import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  background: string,
  isWhite: boolean 
}

export const NavbarStyled = styled.div((props: Props) => [`
  background: ${props.background};`,
  props.isWhite ? tw`bg-white` : tw`bg-transparent`,
  tw`
    w-[100%]
    p-5
    flex
    flex-row
    items-center 
    justify-between`  
])