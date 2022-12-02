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
  bg-white/50
  backdrop-blur-sm
  rounded-xl
  overflow-hidden
  border-solid
  border-[1px]
  border-[rgba(255, 255, 255, 0.7)]
`

export const WrapperStyled = styled.div((props: Props) => [`
  background: ${props.background};
  width: 25rem;
  height: 30rem;
`])