import { TextScrollerStyled} from './TextScrollerStyled'

interface Props {
  children: React.ReactNode
}

const TextScroller: React.FC<Props> = (props) => {
  return (
    <TextScrollerStyled {...props}>
      {props.children} 
    </TextScrollerStyled>
  )
}

export default TextScroller