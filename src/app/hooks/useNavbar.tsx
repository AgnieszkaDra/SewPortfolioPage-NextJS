import { useState } from 'react'


export const useToggleNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

    const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }

  return { navbarOpen, toggleNavbar }
}