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
     w-[100vw] 
     h-[100%] 
     left-0
     object-cover
     bg-no-repeat
  `  
])