import styled from 'styled-components'
import tw from 'twin.macro'
import { animated } from 'react-spring'

export interface Props {
  background: string,
  top?: number,
  right?: number,
  left?: number,
  zIndex?: number,
  title: string  
}

export const ProjectImageStyled = styled.div((props: Props) => [`
  background: ${props.background};
  position: relative;
  top: ${props.top}rem;
  right: ${props.right}rem;
  left: ${props.left}rem;
  z-index: ${props.zIndex};
  transition: all .2s ease-in;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    transition: all .2s ease-in;
  }

  &:hover::after {
    content: "${props.title}";
    width: 25rem;
    height: 3rem;
    position: absolute;
    text-align: center;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  `,
  tw`w-[25rem]
     h-[12rem]
     rounded-lg
     bg-cover
     shadow-2xl`
])