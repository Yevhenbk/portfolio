import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  color?: string,
  background?: string,
  fontFamily?: string,
  fontSize?: number,
  fontWeight?: number,
  padding?: string,
  border?: string,
  borderRadius?: string,
  hoverColor?: string,
  hoverBackground?: string,
  isAnimated?: boolean
}

export const LinkStyled = styled.a((props: Props) => [`
  color: ${props.color};
  padding: ${props.padding};
  font-family: ${props.fontFamily};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
  background: ${props.background};
  border-radius: ${props.borderRadius};
  border: none;
  border: ${props.border};
  z-index: 8;
  
  &:hover {
    background: ${props.hoverBackground};
    color: ${props.hoverColor};
  }`,
  tw`cursor-pointer`,
  tw`border-[1px]`,
  props.isAnimated ?
  tw`ease-in 
     duration-200` :
  ``
])