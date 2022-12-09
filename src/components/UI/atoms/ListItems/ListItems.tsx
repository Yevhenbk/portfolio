import { ListItemsStyled, Props as ListItemsStyledProps } from './ListItemsStyled'
import Text from '../Text/Text'

interface Props
  extends ListItemsStyledProps {
    title: string,
    children: React.ReactNode
  }

const ListItems: React.FC<Props> = (props) => {
  return (
    <ListItemsStyled {...props}>
      <Text
        color='black'
        fontSize={24}
        fontWeight={600}
        fontFamily='Poppins, serif'
      >
        {props.title}
      </Text>
      {props.children} 
    </ListItemsStyled>
  )
}

export default ListItems