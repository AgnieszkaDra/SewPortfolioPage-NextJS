import { useState } from 'react'


export const useToggleNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

    const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }

  return { navbarOpen, toggleNavbar }
}