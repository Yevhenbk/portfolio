import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  justify: string,
  direction: string,
  align?: string,
  padding?: string 
}

export const WrapperStyled = styled.div((props: Props) => [`
  justify-items: ${props.justify};
  flex-direction: ${props.direction};
  aling-items: ${props.align};
  padding: ${props.padding}`,
  tw`flex`
])