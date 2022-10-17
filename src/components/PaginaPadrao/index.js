import { Banner } from 'components/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PaginaPadrao = () => {
  return (
    <main>
        <Banner/>

        <Outlet/>
    </main>
  )
}

export default PaginaPadrao