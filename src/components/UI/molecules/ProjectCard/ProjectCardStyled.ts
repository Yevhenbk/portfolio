import styled from 'styled-components'
import tw from 'twin.macro'
import { animated } from 'react-spring'

export interface Props {
  background?: string
}

export const CardStyled = tw(animated.div)`
  flex
  flex-col
  justify-center
  h-[30rem]
  w-[25rem]
  bg-white/70
  backdrop-blur-sm
  rounded-3xl
  overflow-hidden
`

export const WrapperStyled = styled.div((props: Props) => [`
  background: ${props.background};
`])