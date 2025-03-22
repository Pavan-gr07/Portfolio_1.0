import React from 'react'
import Container from '../Container'

export const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-50 nav-bg">
        <Container>
        <div className="flex justify-between items-center  md:h-[80px] gap-12">
            <button type="button" className="w-[100px] max-sm:w-[100px]">
            <img src="/grs_logo.svg" alt="Logo" style={{width:"100%",height:"100%"}}/>
            </button>
        </div>
        </Container>
    </div>
  )
}
