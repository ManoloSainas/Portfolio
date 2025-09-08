import type { PropsWithChildren } from 'react'
import { StyledStack } from './styled'

type Props = PropsWithChildren<{
  display?: string
  justifyContent?: string
  alignItems?: string
  height?: string
  width?: string
  flexDirection?: string
  flexWrap?: string
  flex?: string
  gap?: string
  backgroundColor?: string
  background?: string
  padding?: string
  border?: string
  margin?: string
  borderRadius?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  boxShadow?: string
}>

export const Stack = ({
  display,
  justifyContent = 'start',
  alignItems = 'start',
  height = 'max-content',
  width,
  flexDirection = 'row',
  flexWrap,
  flex,
  gap,
  backgroundColor,
  background,
  padding,
  border,
  margin,
  borderRadius,
  minWidth,
  maxWidth,
  minHeight,
  boxShadow,
  children
}: Props) => {
  return (
    <StyledStack
      $display={display}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $height={height}
      $width={width}
      $flexDirection={flexDirection}
      $flexWrap={flexWrap}
      $flex={flex}
      $gap={gap}
      $backgroundColor={backgroundColor}
      $background={background}
      $padding={padding}
      $border={border}
      $margin={margin}
      $borderRadius={borderRadius}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $minHeight={minHeight}
      $boxShadow={boxShadow}
    >
      {children}
    </StyledStack>
  )
}
