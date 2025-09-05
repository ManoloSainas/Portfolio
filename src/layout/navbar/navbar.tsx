import { StyledNavbar, StyledNavText } from './style'
import { Button } from '../../components/Button'
import { Stack } from '../../components/Stack'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(location.pathname)
  }, [location.pathname])

  const buttons = [
    { label: 'Home', path: '/Home' },
    { label: 'Chi Sono', path: '/ChiSono' },
    { label: 'Progetti', path: '/Progetti' },
    { label: 'CV', path: '/CV' },
    { label: 'Contatti', path: '/Contatti' }
  ]

  return (
    <StyledNavbar>
      <StyledNavText>Manolo Sainas - Portfolio</StyledNavText>
      <Stack justifyContent="space-between" gap="0.5rem" flexWrap="wrap">
        {buttons.map((btn) => (
          <Button
            key={btn.path}
            variant="navbar"
            active={selected === btn.path}
            onClick={() => navigate(btn.path)}
          >
            {btn.label}
          </Button>
        ))}
      </Stack>
    </StyledNavbar>
  )
}
