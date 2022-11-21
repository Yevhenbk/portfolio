import * as React from 'react'

export const Context = React.createContext<any>('')

type Props = {
 children: React.ReactNode
}

export const ContextProvider = (props: Props) => {

  const [ navbar, setNavbar ] = React.useState<boolean>(false)

  React.useEffect(() => {
    const showColor = () => {
      if (window.scrollY >= 10) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }  

    window.addEventListener('scroll', showColor)
  },[])  

  return (
    <Context.Provider value={{ navbar }}>
      {props.children}
    </Context.Provider>
    )
}