import Container from '@/components/custom/Container'
import { Navbar } from '@/layout/Navbar'
import React from 'react'
import { Banner } from './Banner'
import { Skills } from './Skills'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
    </>
  )
}

