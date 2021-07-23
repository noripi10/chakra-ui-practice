import { Link } from 'react-router-dom'
import { HomeRoutes } from './src/router/HomeRoutes'
import { Flex } from '@chakra-ui/react'

export const NavLink = () => {
  const linkRoutes = HomeRoutes.filter((route) => Object.keys(route).indexOf('name') !== -1)
  return (
    <Flex direction='row' justify='flex-end' color='gray.600' padding={{ base: 3, md: 5 }}>
      {/* {linkRoutes.map((route) => (
        <Link to={route.path}>{route.name}</Link>
      ))} */}
    </Flex>
  )
}
