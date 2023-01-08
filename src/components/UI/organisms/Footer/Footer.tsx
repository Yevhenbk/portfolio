import { FooterStyled } from './FooterStyled'
import Text from '@atoms/Text/Text'

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      {/* <div 
        className='
        w-[40vw]
        h-[.1rem]
        bg-[#432E52]'
      /> */}
      <Text 
        color='white'
        fontSize={18}  
        fontFamily='Share Tech Mono'
        fontWeight={400}
      >
        Designed and build by Yevhen Balahutrak ® 2022
      </Text>
      {/* <div 
        className='
        w-[40vw]
        h-[.1rem]
        bg-[#432E52]'
      /> */}
    </FooterStyled>
  )
}

export default Footer