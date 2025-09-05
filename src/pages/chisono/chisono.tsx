import { Image } from '../../components/Image'
import { Stack } from '../../components/Stack'
import { StyledChiSono } from './styled'

export const ChiSono = () => {
  return (
    <StyledChiSono>
      <Stack>
        <Image
          className="foto-manolo"
          alt="Foto di Manolo Sainas"
          imageUrl="src\assets\myself.jpg"
          width={170}
          height={175}
        />
      </Stack>
      <Stack flexDirection="column" gap="1rem">
        <h3>
          Mi sono recentemente laureato in Informatica all'Università di Cagliari.
          <br /> Durante il tirocinio universitario ho sviluppato
          <br /> un'applicazione front-end utilizzando React e TypeScript.
        </h3>
        <Stack
          gap="2rem"
          alignItems="center"
          borderRadius="10%"
          backgroundColor="white"
          padding="1rem"
        >
          <Image alt="logo di react" imageUrl="src\assets\react-icon.png" width={100} />
          <Image alt="logo di typescript" imageUrl="src\assets\ts-icon.png" width={40} />
          <Image
            alt="logo di javascript"
            imageUrl="src\assets\JS-iconpng.png"
            width={40}
          />
          <Image alt="logo di html" imageUrl="src\assets\html-icon.png" width={40} />
          <Image alt="logo di css" imageUrl="src\assets\css-icon.png" width={47} />
          <Image
            alt="logo di visual studio code"
            imageUrl="src\assets\vscode-icon.png"
            width={35}
          />
          <Image alt="logo di git" imageUrl="src\assets\git-icon.png" width={40} />
        </Stack>
      </Stack>
    </StyledChiSono>
  )
}
