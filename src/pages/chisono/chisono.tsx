import { Image } from '../../components/Image'
import { Stack } from '../../components/Stack'

export const ChiSono = () => {
  return (
    <Stack alignItems="center">
      <Image alt="Foto di Manolo Sainas" imageUrl="src\assets\myself.jpg" width={300} />
      <h1>Ciao sono nel chi sono</h1>
    </Stack>
  )
}
