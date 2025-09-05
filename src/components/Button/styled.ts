import styled from 'styled-components'

export type ButtonVariant = keyof typeof buttonVariants

export const buttonVariants = {
  navbar: {
    backgroundColor: '#e8fff9',
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
  variant?: ButtonVariant
}>`
  background-color: ${({ active, $backgroundColor, variant }) =>
    active
      ? '#29ff3bff'
      : variant
        ? buttonVariants[variant].backgroundColor
        : $backgroundColor};

  border-radius: ${({ $borderRadius, variant }) =>
    variant ? buttonVariants[variant].borderRadius : $borderRadius};

  border: ${({ $border, variant }) =>
    variant ? buttonVariants[variant].border : $border};
  padding: ${({ $padding, variant }) =>
    variant ? buttonVariants[variant].padding : $padding};
  width: ${({ $width }) => $width};
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};

  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ active }) =>
      active ? '#29ff3bff' : 'rgba(203, 255, 245, 1)'};
    transform: scale(1.1);
  }
`
