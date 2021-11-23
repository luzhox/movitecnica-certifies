import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from 'components/layout'
import { Provider } from 'react-redux'
import Store from './redux/store'
import Home from './pages/home'
import Confirmacion from './pages/confirmacion'
import NotFound from './pages/404'
const routes = [
  {
    path: '/',
    Component: <Home />,
  },
  {
    path: '/confirmacion',
    Component: <Confirmacion />,
  },
  {
    path: '*',
    Component: <NotFound />,
  },
]

const Router = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route path={path} key={path} element={Component} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default Router
