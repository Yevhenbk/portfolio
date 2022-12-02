import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  background: string,
  top: string
}

export const BackgroundStyled = styled.div((props: Props) => [`
  background: ${props.background};
  position: absolute;
  top: ${props.top};
  z-index: 1;
  `,
  tw`
     w-[100%] 
     h-[100%] 
     max-h-[50rem]
     left-0
  `  
])