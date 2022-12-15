import { FooterStyled } from './FooterStyled'
import Text from '@atoms/Text/Text'

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div 
        className='
        w-[40vw]
        h-[.1rem]
        bg-[#d0d0d0]'
      />
      <Text 
        color='black'
        fontSize={18}  
        fontFamily='Poppins, serif'
        fontWeight={400}
      >
        Created by Yevhenbk® 2022
      </Text>
      <div 
        className='
        w-[40vw]
        h-[.1rem]
        bg-[#d0d0d0]'
      />
    </FooterStyled>
  )
}

export default Footer