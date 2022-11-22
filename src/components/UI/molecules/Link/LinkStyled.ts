import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  color?: string,
  background?: string,
  fonFamily?: string,
  fontSize?: number,
  fontWeight?: number,
  padding?: string,
  radius?: string,
  hoverColor?: string,
  hoverBackground?: string
}

export const LinkStyled = styled.div((props: Props) => [`
  color: ${props.color};
  padding: ${props.padding};
  font-family: ${props.fonFamily};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
  background: ${props.background};
  border-radius: ${props.radius};
  
  &:hover {
    background: ${props.hoverBackground};
    color: ${props.hoverColor};
  }`,
  tw`cursor-pointer`
])