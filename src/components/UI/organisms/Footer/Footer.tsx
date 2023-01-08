import { FooterStyled } from './FooterStyled'
import Text from '@atoms/Text/Text'

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Text 
        color='white'
        fontSize={18}  
        fontFamily='Share Tech Mono'
        fontWeight={400}
      >
        Designed and built by Yevhen Balahutrak ® 2022
      </Text>
    </FooterStyled>
  )
}

export default Footer