import { hot } from 'react-hot-loader/root'
import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Layout from 'components/layout'
import NotFoundPage from 'pages/404'
import { Store } from 'flux/store'
import history from './utils/history'
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

const Router = () => {
  return (
    <BrowserRouter history={history}>
      <Store>
        <Layout>
          <Switch>
            {routes.map(({ path, Component, exact }) => (
              <Route
                path={path}
                key={path}
                exact={exact}
                component={() => (
                  <Suspense fallback={<div></div>}>
                    <Component />
                  </Suspense>
                )}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </Store>
    </BrowserRouter>
  )
}

export default hot(Router)
