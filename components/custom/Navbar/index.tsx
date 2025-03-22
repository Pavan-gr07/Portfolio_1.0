import React from 'react'
import Container from '../Container'

export const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-50 nav-bg">
        <Container>
        <div className="flex">
            <button type="button" className="w-[50%] max-sm:w-[50%]">
            <img src="/grs_logo.svg" alt="Logo" style={{width:"100%",height:"100%"}}/>
            </button>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </div>
        </Container>
    </div>
  )
}
