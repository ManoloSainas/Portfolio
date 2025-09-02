import type { PropsWithChildren } from 'react'
import { StyledText } from './styled'

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type Props = PropsWithChildren<{
  as?: TextType // special prop, changes the type of HTML element
  color?: string
  fontFamily?: string
  fontSize?: string
}>

export const Text = ({ as = 'h1', color, fontFamily, fontSize, children }: Props) => {
  return (
    <StyledText as={as} $color={color} $fontFamily={fontFamily} $fontSize={fontSize}>
      {children}
    </StyledText>
  )
}
