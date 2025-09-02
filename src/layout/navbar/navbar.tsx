import { StyledNavbar } from './style'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'
import { Stack } from '../../components/Stack'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <StyledNavbar>
      <Text as="h1" fontFamily="Brush Script MT" fontSize="40px">
        Manolo Sainas - Portfolio
      </Text>
      <Stack gap="20px">
        <Button variant="navbar" onClick={() => navigate('/Home')}>
          Home
        </Button>
        <Button variant="navbar" onClick={() => navigate('/ChiSono')}>
          Chi Sono
        </Button>
        <Button variant="navbar" onClick={() => navigate('/Progetti')}>
          Progetti
        </Button>
        <Button variant="navbar" onClick={() => navigate('/CV')}>
          CV
        </Button>
        <Button variant="navbar" onClick={() => navigate('/Contatti')}>
          Contatti
        </Button>
      </Stack>
    </StyledNavbar>
  )
}
