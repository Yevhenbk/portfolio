import * as React from 'react'

export const Context = React.createContext<any>('')

type Props = {
  children: React.ReactNode
}

export const ContextProvider = (props: Props) => {

  const [ navbar, setNavbar ] = React.useState<boolean>(false)

  const showColor = () => {
    if (window.scrollY >= 10) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const menuItems = [
    { name: "Work", number: "01" },
    { name: "Experience", number: "02" },
    { name: "About", number: "03" },
    { name: "Contact", number: "04" }
  ]

  React.useEffect(() => {  

    showColor()
    
    window.addEventListener('scroll', showColor)

  },[])  

  return (
    <Context.Provider 
      value={{ 
        navbar,
        menuItems
      }}>
      {props.children}
    </Context.Provider>
    )
}