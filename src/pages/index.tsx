import { NextPage } from 'next'
import tw from 'twin.macro'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Iframe from '@atoms/Iframe/Iframe'
import Text from '@atoms/Text/Text'
import Navbar from '@organisms/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Layout title='Home' />
      <main className='flex flex-col items-center w-full text-center'>
        <Navbar />
        <Iframe />
      </main>
    </div>
  )
}

export default Home

const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`

// const ConditionalButton = styled.button<{ isRed: boolean }>`
//   ${props => (props.isRed ? tw`text-red-500` : tw`text-amber-400`) }
// `

interface StyledProps {
  isRed: boolean
}

const ConditionalStyled = styled.button((props: StyledProps) => [
  props.isRed ? tw`bg-red-50` : tw`bg-amber-600`,
  tw`
    text-2xl
    font-semibold
    p-4
    rounded-lg
    text-white`
])