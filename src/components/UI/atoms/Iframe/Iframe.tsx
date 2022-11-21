import React from 'react'
import Spline from '@splinetool/react-spline'
import { IframeStyled } from './IframeStyled'

const Iframe: React.FC = () => {
  return (
    <IframeStyled>
      <Spline 
        className='relative 2xl:scale-150 xl:scale-140 md:scale-100
        sm:scale-50 scale-50'
        scene="https://prod.spline.design/8KoWUkFFFSDUTsKO/scene.splinecode"
      />
    </IframeStyled>
  )
}

export default Iframe