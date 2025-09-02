import styled from 'styled-components'

export type buttonVariant = keyof typeof buttonVariants

export const buttonVariants = {
  navbar: {
    backgorundColor: '#edfff5',
    border: 'none',
    borderRadius: '20%',
    padding: '15px'
  }
}

export const StyledButton = styled.button<{
  $backgroundColor?: string
  $fontSize?: string
  $borderRadius?: string
  $border?: string
  $padding?: string
  $width?: string
  $color?: string
  active?: boolean
  variant?: buttonVariant
}>`
  background-color: ${({ $backgroundColor, variant }) =>
    variant === undefined ? $backgroundColor : buttonVariants[variant].backgorundColor};
  font-size: ${({ $fontSize }) => $fontSize};
  border-radius: ${({ $borderRadius, variant }) =>
    variant === undefined ? $borderRadius : buttonVariants[variant].borderRadius};
  border: ${({ $border, variant }) =>
    variant === undefined ? $border : buttonVariants[variant].border};

  padding: ${({ $padding, variant }) =>
    variant === undefined ? $padding : buttonVariants[variant].padding};

  width: ${({ $width }) => $width};
  color: ${({ $color }) => $color};

  &:hover {
    background-color: rgba(203, 255, 245, 1);
  }

  @media (max-width: 376px) {
  }
`
