import { RecordWithTtl } from 'dns'
import tw from 'twin.macro'

export interface Props {
  children: React.ReactNode,
  onClick: React.MouseEventHandler
}

export const IconWrapperStyled = tw.button`
  rounded-full
  w-[18rem]
  p-[.75rem]
  flex
  flex-row-reverse
  justify-center
  gap-5
  mt-4
  text-white
  shadow-[ 0px 0px 16px]
  shadow-[#5A3BF8c8]
  bg-[#5A3BF8]
  hover:cursor-pointer
  ease-in
  duration-100
  hover:bg-[#4a30ce]
  hover:shadow-[#4a30cec8]
  hover:text-white
`