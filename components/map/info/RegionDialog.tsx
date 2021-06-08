import { Box, Container, Heading } from '@chakra-ui/react';
import {useRouter} from 'next/router';

function generateContentBody(contentProps){
  const {locale} = useRouter();
  const localeStrings = {
    "en": ["City Area", "Gathering Area", "Combat Area", "??? Area"],
    "jp": ["都市", "探索セクション", "戦闘セクション", "??? セクション"]
  }

  if (contentProps.content.region == 0){
    return (
      <Container paddingTop='5px' margin={0}>
        <Box paddingBottom="5px">
          <Heading size={"sm"}>{localeStrings[locale][contentProps.content.region]}</Heading>
        </Box>
        <Box>
          Max Players: {contentProps.content.maxPlayers}
        </Box>
      </Container>
    )
  }
  return(
    <Container paddingTop='5px' margin={0}>
    <Box paddingBottom="5px">
      <Heading size={"sm"}>{localeStrings[locale][contentProps.content.region]}</Heading>
    </Box>
    <Box>
      Max Players: {contentProps.content.maxPlayers}
      <br/>
      Recommended CP: {contentProps.content.recommendedCP}
      <br/>
      Average Enemy Level: {contentProps.content.avgEnemyLvl}
    </Box>
  </Container>
  );
}

export default function PopupContent(props: any){
  const content = generateContentBody(props);
  return(
    <Box>
      {/* Title bar */}
      <Box sx={{padding: "5px 5em 0 5px", backgroundColor: "#2b5e8d"}}>
        <Heading size="sm">{props.title}</Heading>
      </Box>

      {/* Contents */}
      <Box fontSize={"semibold"} sx={{margin: "5px", padding: "5px", backgroundColor: "inherit"}}>
        <Heading size="sm">{props.contentHeader}</Heading>
        {content}
      </Box>
    </Box>
  );
}
