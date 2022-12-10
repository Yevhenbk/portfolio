import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
    width?: number
}

export const ListItemsStyled = styled.ul((props: Props) => [`
  width: ${props.width}rem;`,
  tw`flex 
     flex-col
     items-center
     text-center`
])

export const ListItemStyled = tw.li`
  text-lg
  text-[#616161]
  font-medium
  w-[246px]
`