import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  color?: string,
  background?: string,
  fonFamily?: string,
  fontSize?: number,
  fontWeight?: number,
  padding?: string,
  borderRadius?: string,
  colorHover?: string,
  backgroundHover?: string
}

export const LinkStyled = styled.div((props: Props) => [`
  color: ${props.color};
  padding: ${props.padding};
  font-family: ${props.fonFamily};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
  background: ${props.background};
  border-radius: ${props.borderRadius};
  
  &:hover {
    background: ${props.backgroundHover};
    color: ${props.colorHover};
  }`,
  tw`cursor-pointer`
])