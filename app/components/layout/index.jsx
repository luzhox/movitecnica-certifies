import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../commons/Header'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='movi-content'>{children}</div>
    </>
  )
}

export default withRouter(Layout)
