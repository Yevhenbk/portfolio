import styled from 'styled-components'

export interface Props {
  justify: string,
  direction: string,
  align?: string,
  padding?: string 
}

export const WrapperStyled = styled.div((props: Props) => [`
  display: flex;
  flex-direction: ${props.direction};
  justify-content: ${props.justify};
  aling-items: ${props.align};
  padding: ${props.padding};
  width: 100%;`,
])