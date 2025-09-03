import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  display: flex;
  width: 100vw;
  background-color: #bdfdb7;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 0px 0px 10px 0px;
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
