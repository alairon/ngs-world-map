import { Box, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router';

export default function ContainerDialog(contentProps){
  const { locale } = useRouter();
  const localeStrings: Object = {
    en: {
      redContainer: "Red Item Container",
      barrierText: "Protected by a barrier",
      reward: "Reward"
    },
    jp: {
      redContainer: "アイテムコンテナ[赤]",
      barrierText: "プロテクトコンテナ",
      reward: "報酬"
    }
  }

  const barrierText = contentProps.barrier ? <Box><b>{localeStrings[locale].barrierText}</b></Box> : <Box/>

  return (
    <Box>
      {/* Title bar */}
      <Box sx={{backgroundColor: "#2b5e8d"}}>
        <Heading size="sm" padding="5px 0 5px 5px">{contentProps.title}</Heading>
      </Box>

      <Box margin={"5px"} padding={"3px"} sx={{backgroundColor: "rgba(29,38,53,0.6)"}}>
        <Container margin={0}>
          <Box sx={{textAlign: "center", padding: "5px", backgroundColor: "none"}}>
            <Heading size="sm">{contentProps.name}</Heading>
            <Box paddingTop="5px">
              {barrierText}
              <b>{localeStrings[locale].reward}</b>: {contentProps.content}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
