import { Outlet } from 'react-router'
import { Navbar } from './navbar/navbar'
import { Stack } from '../components/Stack'
import { Footer } from './footer/footer'

export const Layout = () => {
  return (
    <Stack flexDirection="column" minHeight="100vh">
      <Navbar />
      <Stack flex="1" width="100%" flexDirection="column">
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  )
}
