import { hot } from 'react-hot-loader/root'
import { AppContainer } from 'react-hot-loader'

import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Layout from 'components/layout'
import { Provider } from 'react-redux'
import Store from './redux/store'
import history from './utils/history'
import Home from './pages/home'
const routes = [
  {
    path: '/',
    Component: lazy(() => import('./pages/home')),
    exact: true,
  },
  {
    path: '/confirmacion',
    Component: lazy(() => import('./pages/confirmacion')),
    exact: true,
  },
]

const Routero = () => {
  return (
    <Provider store={Store}>
      <AppContainer>
        <BrowserRouter history={history}>
          <Layout>
            <Switch>
              {routes.map(({ path, Component, exact }) => (
                <Route
                  path={path}
                  key={path}
                  exact={exact}
                  component={() => (
                    <Suspense fallback={<Home />}>
                      <Component />
                    </Suspense>
                  )}
                />
              ))}
            </Switch>
          </Layout>
        </BrowserRouter>
      </AppContainer>
    </Provider>
  )
}
Routero()
export default hot(Routero)
