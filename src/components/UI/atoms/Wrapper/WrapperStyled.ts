import styled from 'styled-components'

export interface Props {
  justifyContent: string,
  direction: string,
  alignItems?: string,
  padding?: string,
  position?: string
}

export const WrapperStyled = styled.div((props: Props) => [`
  display: flex;
  flex-direction: ${props.direction};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems};
  padding: ${props.padding};
  width: 100%;
  position: ${props.position};
`])