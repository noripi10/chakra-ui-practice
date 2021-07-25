import { memo, VFC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { HomeRoutes } from './HomeRoutes'
import { HeaderLayout } from '../components/template/HeaderLayout'
import { LoginUserProvider } from '../providers/LoginUserProvider'

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path='/' component={Login} />
        <Route
          path='/home'
          render={({ match: { url } }) => (
            <Switch>
              {HomeRoutes.map(({ exact, path, children }) => (
                <Route key={path} exact={exact} path={`${url}${path}`}>
                  <HeaderLayout>{children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      {/* login user provider には入れない */}
      <Route path='*' component={NotFound} />
    </Switch>
  )
})
