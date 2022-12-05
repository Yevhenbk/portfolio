import { ProfessionalCardStyled } from './ProfessionalCardStyled'
import Text from '@atoms/Text/Text'

interface Props {
  title: string,
  date: string,
  role: string,
  description: string
}

const ProfessionalCard: React.FC<Props> = (props) => {
  return (
    <ProfessionalCardStyled>
      <div 
        className='
        flex
        flex-row
        justify-between'
      >
        <Text
          fontFamily='Poppins, serif'
          fontWeight={700}
          fontSize={32}
          lineHeight='1.1'
          isLinear={true}
        >
          {props.title}
        </Text>    
        <Text
          fontFamily='Share Tech Mono, sans'
          fontWeight={500}
          fontSize={21}
        >
        {props.date}
        </Text> 
      </div>
      <Text
        fontFamily='Poppins, serif'
        fontWeight={600}
        fontSize={24}
        color='rgba(0,0,0, 0.7)'
      >
        {props.role}
      </Text> 
      <Text
        fontFamily='Poppins, serif'
        fontWeight={500}
        fontSize={21}
        lineHeight='1.25'
        color='rgba(0,0,0, 0.6)'
      >
        {props.description}
      </Text> 
    </ProfessionalCardStyled>
  )
}

export default ProfessionalCard