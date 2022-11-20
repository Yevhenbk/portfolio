import React from 'react'
import Spline from '@splinetool/react-spline'

const Iframe: React.FC = () => {
  return (
    <Spline style={{ width: '1000px', height: '1000px'}} scene="https://prod.spline.design/8KoWUkFFFSDUTsKO/scene.splinecode" />
  )
}

export default Iframe