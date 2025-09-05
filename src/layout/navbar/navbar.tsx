import { StyledNavbar, StyledNavText } from './style'
import { Button } from '../../components/Button'
import { Stack } from '../../components/Stack'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <StyledNavbar>
      <StyledNavText>Manolo Sainas - Portfolio</StyledNavText>
      <Stack justifyContent="space-between" gap="0.5rem" flexWrap="wrap">
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
