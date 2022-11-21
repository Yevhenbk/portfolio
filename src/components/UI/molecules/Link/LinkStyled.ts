import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  color: string,
  background: string,
  fonFamily: string,
  fontSize: number,
  fontWeight: number
}

export const LinkStyled = styled.div((props: Props) => [`
  color: ${props.color};
  font-family: ${props.fonFamily};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};`,
  tw`ease-in 
     duration-200`
])