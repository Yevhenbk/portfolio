import styled from 'styled-components'
import tw from 'twin.macro'

export interface Props {
  color?: string,
  background?: string,
  borderRadius?: string,
  hoverBackground?: string,
  fontSize: string,
  padding?: string,
  width?: number,
  height?: number,
  position?: string,
  right?: string,
  transform?: string,
  isAnimated?: boolean
}

export const IconStyled = styled.div((props: Props) => [`
  color: ${props.color};
  background: ${props.background};
  border-radius: ${props.borderRadius};
  font-size: ${props.fontSize};
  padding: ${props.padding};
  width: ${props.width}px;
  height: ${props.height}px;
  position: ${props.position};
  right: ${props.right};
  overflow: hidden;
  
  &:hover {
    background: ${props.hoverBackground};
    transform: ${props.transform};
  }`,
  props.isAnimated ? 
    tw`transition
     ease-in-out
     duration-200 
     group-hover:transition 
     group-hover:ease-in-out
     group-hover:duration-200` : tw``
])