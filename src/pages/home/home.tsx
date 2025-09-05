import { Stack } from '../../components/Stack'
import { StyledH1 } from './style'

export const Home = () => {
  return (
    <Stack
      justifyContent="start"
      alignItems="center"
      width="100%"
      minHeight="100vh"
      flexDirection="column"
      padding="80px 0px 0px 0px"
      backgroundColor="#c2ffef"
    >
      <StyledH1>Ciao, sono Manolo!</StyledH1>
      <StyledH1>Front-end Developer ❤️</StyledH1>
    </Stack>
  )
}
