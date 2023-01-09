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
        <p>Designed and built by Yevhen Balahutrak ® 2022</p>
      </Text>
      <Text 
        color='white'
        fontSize={18}  
        fontFamily='Share Tech Mono'
        fontWeight={400}
      >
        <p>balagutrak.jenia@gmail.com | +34643355265</p>
      </Text>
    </FooterStyled>
  )
}

export default Footer