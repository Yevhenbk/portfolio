import tw from 'twin.macro'
import { animated } from 'react-spring'

export const SkillsTableStyled = tw(animated.div)`
  rounded-3xl
//   bg-[#c7c7c7]
bg-white/30
  backdrop-blur-sm
  border-[rgba(255, 255, 255, 0.7)]
  border-[1px]
  min-h-[46rem]
  text-left
  p-8
  flex
  flex-col
  justify-between
`