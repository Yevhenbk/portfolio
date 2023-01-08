import { SkillsTableStyled } from './SkillsTableStyled'
import { useSpring, config } from 'react-spring'
import Text from '@atoms/Text/Text'
import { IconWrapperStyled } from './SkillsTable.Helper'
import { skillsItems,
  Props as SkillsItemsProps } from '../../../../../static/utils/SkillsItems'

const calc = (x: any, y: any) => [-(y - window.innerHeight / 1.5) / 40, (x - window.innerWidth / 1.5) / 40, 1]
const trans = (x: any, y: any, s: any) => `perspective(3000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SkillsTable: React.FC = () => {

  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))

  return (
    <div
      className='
      text-end
      z-30 flex
      flex-col
      justify-between'
    >
      <div
        className='
        flex flex-col
        items-end pr-4
        gap-5'
      >
        <Text
          fontFamily='Poppins'
          fontSize={36}
          fontWeight={900}
          lineHeight='1.25'
          width='22rem'
        >
          Experience & Technologies I use  
        </Text> 
        <Text
          fontSize={21}
          fontWeight={500}
          fontFamily='Poppins'
          width='26rem'
        >
          Where I've worked and what I've used to build 
          those projects.  
        </Text>
      </div>  
      <SkillsTableStyled
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: prop.xys.interpolate(trans)
        }}
      >
        {skillsItems.map((item: SkillsItemsProps) => (
          <div
            key={item.id}
          >
            <Text
              fontFamily='Poppins'
              fontSize={21}
              fontWeight={600}
            >
              {item.title}  
            </Text>
            <div
              className='
              flex flex-row
              gap-4 flex-wrap
              pt-6'
            >
              {item.skillOne ? 
                <IconWrapperStyled>
                  {item.skillOne}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillTwo ? 
                <IconWrapperStyled>
                  {item.skillTwo}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillThree ? 
                <IconWrapperStyled>
                  {item.skillThree}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillFour ? 
                <IconWrapperStyled>
                  {item.skillFour}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillFive ? 
                <IconWrapperStyled>
                  {item.skillFive}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillSix ? 
                <IconWrapperStyled>
                  {item.skillSix}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillSeven ? 
                <IconWrapperStyled>
                  {item.skillSeven}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillEight ? 
                <IconWrapperStyled>
                  {item.skillEight}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillNine ? 
                <IconWrapperStyled>
                  {item.skillNine}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillTen ? 
                <IconWrapperStyled>
                  {item.skillTen}  
                </IconWrapperStyled> : 
              <></>}
              {item.skillEleven ? 
                <IconWrapperStyled>
                  {item.skillEleven}  
                </IconWrapperStyled> : 
              <></>}
            </div>
          </div>  
        ))}
      </SkillsTableStyled> 
    </div>
    
  )
}

export default SkillsTable