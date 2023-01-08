import { ExperienceTableStyled } from './ExperienceTableStyled'
import { ExperienceWrapperStyled, InfoWrapperStyled,
  Props as ExperienceWrapperProps } from './ExperienceTable.Helper'
import Text from '@atoms/Text/Text' 
import { experienceItems, 
  Props as ExperienceItemsProps } from '../../../../../static/utils/ExperienceItems' 
  
const ExperienceWrapper: React.FC<ExperienceWrapperProps> = ({count, company}) => {
  return (
    <ExperienceWrapperStyled>
      <Text
        fontFamily='Share Tech Mono'
        fontSize={24}
        color='white'
      >
        {count}
      </Text>
      <Text
        fontFamily='Poppins'
        fontSize={28}
        fontWeight={200}
        color='white'
      >
        |
      </Text>
      <Text
        fontFamily='Poppins'
        fontSize={18}
        color='white'
      >
        {company}
      </Text>
    </ExperienceWrapperStyled>
  )  
}

const InfoWrapper: React.FC<ExperienceWrapperProps> = ({date, description}) => {
  return (
    <InfoWrapperStyled>
      <Text
        fontFamily='Poppins'
        fontSize={18}
        color='white'
        width='8rem'
      >
        {date}
      </Text>
      <Text
        fontFamily='Poppins'
        fontSize={16}
        color='white'
        width='30rem'
      >
        {description}
      </Text>
    </InfoWrapperStyled>
  )  
}

const ExperienceTable: React.FC = (props) => {
  return (
    <ExperienceTableStyled {...props}>
      {experienceItems.map((item: ExperienceItemsProps) => (
        <div
          className='
          flex
          flex-row'
          key={item.id}
        >
          <ExperienceWrapper 
            count={item.count}
            company={item.company}
          />  
          <InfoWrapper 
            date={item.date}
            description={item.description}
          />  
        </div>
      ))}
    </ExperienceTableStyled>
  )
}

export default ExperienceTable