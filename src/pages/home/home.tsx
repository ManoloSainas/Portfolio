import { Stack } from '../../components/Stack'
import { StyledH1 } from './style'

export const Home = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="#c2ffef"
      width="100%"
      flex="1"
    >
      <StyledH1>Ciao, sono Manolo!</StyledH1>
      <StyledH1>Front-end Developer ❤️</StyledH1>
    </Stack>
  )
}
