import HomeTemplate from '@templates/HomeTemplate'
import { NextPage } from 'next'
import Text from '@atoms/Text/Text'

const Home: NextPage = () => {
  return (
    <>
      { global.innerWidth > 800 ?
        <HomeTemplate /> :
        <div
          className='
          w-[100%]
          h-[100%]
          fixed
          top-[0]
          left-[0]
          bg-[#D9D9D9]
          flex
          flex-col
          justify-center
          items-center'
        >
         <Text
            color='black'
            fontSize={21}
            fontWeight={600}
            fontFamily='Poppins, serif'
            width='30rem'
          >
            <p>
              Hey there! Mobile version is 
              currently under construction :/ 
              <br />
              I'm doing my best for it to happen 
              asap, and for now, in order to see 
              the portfolio, please switch to desktop
              version. Thank you!
            </p>
          </Text> 
        </div>
        
      }
    </>
    
  )
}

export default Home