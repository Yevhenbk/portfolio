import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  background: string,
  top?: string,
  width?: string,
  height?: string,
  position?: string
}

export const BackgroundStyled = styled.div((props: Props) => [`
  background: ${props.background};
  position: ${props.position};
  top: ${props.top};
  z-index: 1;
  width: ${props.width};
  height: ${props.height};
  `,
  tw`
     left-0
     object-cover
     bg-no-repeat
  `  
])