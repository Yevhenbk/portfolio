import * as React from 'react'

export const Context = React.createContext<any>('')

type Props = {
  children: React.ReactNode
}

export const ContextProvider = (props: Props) => {

  const [ navbar, setNavbar ] = React.useState<boolean>(false)

  const showColor = () => {
    if (global.scrollY >= 10) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  React.useEffect(() => {  

    showColor()
    
    window.addEventListener('scroll', showColor)

  },[])  

  return (
    <Context.Provider 
      value={{ 
        navbar
      }}>
      {props.children}
    </Context.Provider>
    )
}