import styled from 'styled-components'

export interface Props {
  color: string,
  fonFamily: string,
  fontSize: number,
  fontWeight?: number  
}

export const TextStyled = styled.div((props: Props) => [`
  color: ${props.color};
  font-family: ${props.fonFamily};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
`])