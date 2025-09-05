import styled from 'styled-components'

export const StyledH1 = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  text-shadow: 1px 1px 2px #15ff00ff;

  @media (max-width: 591px) {
    text-align: center;

    font-size: 2.4rem;
  }

  @media (max-width: 476px) {
    text-align: center;

    font-size: 2rem;
  }
`
