import React from 'react'
import Header from '../commons/Header'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='movi-content'>{children}</div>
    </>
  )
}

export default Layout
