import tw from 'twin.macro'

export interface IconWrapperProps {
  children: React.ReactNode
}

export const IconWrapperStyled = tw.div`
  flex
  flex-row
  items-center
  max-w-[8rem]
  justify-between
  gap-2
  p-[.25rem .5rem .25rem .25rem]
  bg-[rgba(255, 255, 255, 0.3)]
  rounded-full
`