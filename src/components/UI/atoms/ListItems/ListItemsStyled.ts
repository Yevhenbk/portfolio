import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
    width?: number
}

export const ListItemsStyled = styled.ul((props: Props) => [`
  width: ${props.width}rem;`,
  tw`flex 
     flex-col
     items-start`
])

export const ListItemStyled = tw.li`
  text-lg
`