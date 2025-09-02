import { Outlet } from 'react-router'
import { Navbar } from './navbar/navbar'
import { Stack } from '../components/Stack'

export const Layout = () => {
  return (
    <Stack flexDirection="column">
      <Navbar />
      <Outlet />
    </Stack>
  )
}
