import React from 'react'
import Spline from '@splinetool/react-spline'
import { IframeStyled } from './IframeStyled'

const Iframe: React.FC = () => {
  return (
    <IframeStyled>
      <Spline 
        className='relative sm:scale-50 md:scale-100'
        scene='https://prod.spline.design/8KoWUkFFFSDUTsKO/scene.splinecode'
      />
    </IframeStyled>
  )
}

export default Iframe