import tw from 'twin.macro'

export interface Props {
  myKey?: number,
  count?: string,
  company?: string,
  date?: string,
  description?: string
}

export const ExperienceWrapperStyled = tw.div`
  flex
  flex-row
  items-center
  w-[18rem]
  justify-start
  gap-5
  p-[3rem]
  bg-[#432E52]
  justify-self-stretch
`

export const InfoWrapperStyled = tw.div`
  flex
  flex-row
  items-start
  justify-between
  gap-5
  h-[100%]
  py-[3rem]  
  pl-[4rem]
  min-[1736px]:pl-[12rem]
`