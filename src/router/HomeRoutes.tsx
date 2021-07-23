import { Home } from '../pages/Home'
import { UserManagement } from '../pages/UserManagement'
import { Settings } from '../pages/Settings'
import { NotFound } from '../pages/NotFound'

export const HomeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user-management',
    exact: false,
    children: <UserManagement />,
  },
  {
    path: '/settings',
    exact: false,
    children: <Settings />,
  },
  {
    path: '*',
    exact: false,
    children: <NotFound />,
  },
]
