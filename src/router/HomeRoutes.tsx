import { Home } from '../components/pages/Home'
import { Login } from '../components/pages/Login'
import { UserManagement } from '../components/pages/UserManagement'
import { Settings } from '../components/pages/Settings'
import { NotFound } from '../components/pages/NotFound'

export const HomeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/login',
    exact: true,
    children: <Login />,
  },
  {
    path: '/user-management',
    exact: true,
    children: <UserManagement />,
  },
  {
    path: '/settings',
    exact: true,
    children: <Settings />,
  },
  {
    path: '*',
    exact: false,
    children: <NotFound />,
  },
]
