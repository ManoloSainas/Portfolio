import type { PropsWithChildren } from 'react'
import { StyledButton, type buttonVariant } from './styled'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  backgroundColor?: string
  fontSize?: string
  borderRadius?: string
  border?: string
  padding?: string
  width?: string
  color?: string
  active?: boolean
  variant?: buttonVariant
}>

export const Button = ({
  children,
  onClick,
  disabled = false,
  fontSize,
  borderRadius,
  backgroundColor,
  border,
  padding,
  width,
  color,
  active = undefined,
  variant = undefined
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      $border={border}
      $padding={padding}
      $width={width}
      $color={color}
      active={active}
      variant={variant}
    >
      {children}
    </StyledButton>
  )
}
