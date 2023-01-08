import { RecordWithTtl } from 'dns'
import tw from 'twin.macro'

export interface Props {
  children: React.ReactNode,
  onClick: React.MouseEventHandler
}

export const IconWrapperStyled = tw.button`
  rounded-full
  bg-white
  w-[23rem]
  p-[.75rem]
  flex
  flex-row-reverse
  justify-center
  gap-5
  mt-4
  hover:cursor-pointer
  hover:bg-[#D9D9D9]
`