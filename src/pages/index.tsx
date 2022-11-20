import Head from 'next/head'
import { NextPage } from 'next'
import Iframe from '@ui/atoms/Iframe/Iframe'
import tw from 'twin.macro'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center w-full flex-1 px-20 text-center'>
        {/* <StyledButton>In Style</StyledButton> */}
        <Iframe />
        {/* <ConditionalStyled isRed={false}>Tested button</ConditionalStyled> */}
      </main>
    </div>
  )
}

export default Home

// still works despite importing from twin.macro
const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid black;
`

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