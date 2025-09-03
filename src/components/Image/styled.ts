import styled from 'styled-components'

export const StyledImage = styled.img<{ $width?: number; $height?: number }>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;

  @media (max-width: 376px) {
    width: 300px;
    height: 250px;
  }
`
