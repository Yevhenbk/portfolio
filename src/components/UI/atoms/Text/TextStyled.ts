import styled from 'styled-components'

export interface Props {
  color: string,
  fontFamily: string,
  fontSize: number,
  fontWeight?: number,
  position?: string,
  top?: string,
  right?: string,
  width?: string,
  lineHeight?: string,
  isStroke?: boolean,
  strokeColor?: string  
}

export const TextStyled = styled.div((props: Props) => [
  `${props.isStroke ? `-webkit-text-stroke: 1px ${props.strokeColor}` :
  ``};
  color: ${props.color};
  font-family: ${props.fontFamily};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
  position: ${props.position};
  top: ${props.top};
  right: ${props.right};
  width: ${props.width};
  line-height: ${props.lineHeight};
`])