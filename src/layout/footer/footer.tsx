import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'

export const Footer = () => {
  return (
    <Stack
      width="100%"
      justifyContent="center"
      backgroundColor="#daff6d3b"
      background="linear-gradient(to bottom, #bbecff, #09b9ff);"
    >
      <Text as="h3"> &copy; {new Date().getFullYear()} Manolo Sainas</Text>
    </Stack>
  )
}
