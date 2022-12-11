import tw from 'twin.macro'
import { animated } from 'react-spring'

export const MailtoStyled = tw(animated.div)`
  flex
  flex-row
  p-[1rem]
  justify-between
  items-center
  h-[5rem]
  w-[30rem]
  bg-white/30
  backdrop-blur-sm
  rounded-md
  border-solid
  border-[1px]
  border-[rgba(255, 255, 255, 0.7)]
  z-10
`

