import tw from 'twin.macro'

export interface Props {
  children: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
  style?: any
}

export const IconWrapperStyled = tw.div`
  rounded-full
  shadow-[ 0px 0px 16px]
  shadow-[#5A3BF8c8]
  bg-[#5A3BF8]
  h-[4rem]
  w-[4rem]
  flex
  justify-center
  items-center
  text-white
  ease-in
  duration-100
  hover:cursor-pointer
  hover:scale-[1.15]
  text-3xl
  font-['Poppins']
`