import * as React from 'react'
import Navbar from '@organisms/Navbar/Navbar'
import Layout from '../Layout'

const HomeTemplate: React.FC = () => {
  return (
    <main>
      <Layout title='Portfolio | Yevhenbk' />
      <Navbar />  
    </main>
  )
}

export default HomeTemplate