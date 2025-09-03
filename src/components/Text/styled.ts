import styled from 'styled-components'

export const StyledText = styled.h1<{
  $color?: string
  $fontFamily?: string
  $fontSize?: string
}>`
  color: ${({ $color }) => $color};
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $fontSize }) => $fontSize};
  @media (max-width: 376px) {
    font-size: 30px;
  }
`
