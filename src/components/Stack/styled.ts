import styled from 'styled-components'

type cssProps = {
  $display?: string
  $justifyContent?: string
  $alignItems?: string
  $height?: string
  $width?: string
  $flexDirection?: string
  $flexWrap?: string
  $flex?: string
  $gap?: string
  $backgroundColor?: string
  $background?: string
  $padding?: string
  $border?: string
  $margin?: string
  $borderRadius?: string
  $minWidth?: string
  $maxWidth?: string
  $minHeight?: string
  $boxShadow?: string
}

export const StyledStack = styled.div<cssProps>`
  display: ${({ $display }) => $display || 'flex'};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  flex: ${({ $flex }) => $flex};
  gap: ${({ $gap }) => $gap};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  background: ${({ $background }) => $background};
  padding: ${({ $padding }) => $padding};
  border: ${({ $border }) => $border};
  margin: ${({ $margin }) => $margin};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  min-width: ${({ $minWidth }) => $minWidth};
  max-width: ${({ $maxWidth }) => $maxWidth};
  min-height: ${({ $minHeight }) => $minHeight};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
`
