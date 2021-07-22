import { Switch, Route } from 'react-router-dom'

import { HomeRoutes } from './HomeRoutes'

export const Router = () => {
  return (
    <Switch>
      {HomeRoutes.map((route) => (
        <Route {...route} />
      ))}
    </Switch>
  )
}
