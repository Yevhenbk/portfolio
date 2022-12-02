import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  color: string,
  fontSize: number,
  fontWeight?: number,
  fontFamily: string,
  background: string,
  padding: string,
  radius: number,
  hoverColor?: string,
  hoverBackground?: string,
  border?: string,
  margin?: string,
  isAnimated?: boolean,
  display?: string,
  flexDirection?: string,
  justify?: string,
  items?: string,
  width?: string,
  hoverWidth?: string
}

export const ButtonStyled = styled.button((props: Props) => [`
  color: ${props.color};
  background: ${props.background};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
  font-family: ${props.fontFamily};
  padding: ${props.padding};
  border: none;
  border-radius: ${props.radius}px;
  border: ${props.border};
  margin: ${props.margin};
  display: ${props.display};
  flex-directoin: ${props.flexDirection};
  justify-content: ${props.justify};
  align-items: ${props.items};
  width: ${props.width};
  
  &:hover {
    color: ${props.hoverColor};
    background: ${props.hoverBackground};
    width: ${props.hoverWidth};
  }`,
  props.isAnimated ?
  tw`ease-in 
     duration-200` :
  ``
])