import styled from 'styled-components'

export const TextScrollerStyled = styled.a`
  font-size: 104px;
  font-weight: 800;
  width: 100%;
  word-spacing: 60px;
  white-space: nowrap;
  position: absolute;
  text-transform: uppercase;
  -webkit-animation: mymove 8s linear infinite;
  animation: mymove 8s linear infinite alternate;

  @-webkit-keyframes mymove {
    from {
      left: -50vw;
    }
    to {
      left: -220vw;
    }
  }
  
  @keyframes mymove {
    from {
      left: -50vw;
    }
    to {
      left: -220vw;
    }
  }`