import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  display: flex;
  width: 100vw;
  background: linear-gradient(to bottom, #31ff1eff, #c2ffef);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 0px 0px 40px 0px;
`
export const StyledNavText = styled.h1`
  text-align: center;
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;

  @media (max-width: 393px) {
    text-align: center;
    font-family: 'Great Vibes', cursive;
    font-size: 2.4rem;
  }
`
