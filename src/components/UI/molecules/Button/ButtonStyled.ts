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
  borderColor?: string,
  margin?: string
}

export const ButtonStyled = styled.button((props: Props) => [`
  color: ${props.color};
  background: ${props.background};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
  font-family: ${props.fontFamily};
  padding: ${props.padding};
  border-radius: ${props.radius}px;
  border-color: ${props.borderColor};
  margin: ${props.margin};
  
  &:hover {
    color: ${props.hoverColor};
    background: ${props.hoverBackground};
  }`,
  tw`border-[1px]
     ease-in 
     duration-200`
])