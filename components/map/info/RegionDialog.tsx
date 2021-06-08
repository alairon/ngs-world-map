import { Box, Container, Heading } from '@chakra-ui/react';
import {useRouter} from 'next/router';

function generateContentBody(contentProps){
  const {locale} = useRouter();
  const localeStrings = {
    "en": ["City Area", "Gathering Area", "Combat Area", "??? Area"],
    "jp": ["都市", "探索セクション", "戦闘セクション", "??? セクション"]
  }

  if (contentProps.region == 0){
    return (
      <Box>
      {/* Title bar */}
      <Box sx={{backgroundColor: "#2b5e8d"}}>
        <Heading size="sm">{contentProps.title}</Heading>
      </Box>
      <Container paddingTop='5px' margin={0}>
        <Box paddingBottom="5px">
          <Heading size={"sm"}>{localeStrings[locale][contentProps.region]}</Heading>
        </Box>
        <Box>
          Max Players: {contentProps.maxPlayers}
        </Box>
      </Container>
      </Box>
    )
  }
  return(
    <Box>
            {/* Title bar */}
            <Box sx={{backgroundColor: "#2b5e8d"}}>
        <Heading size="sm">{contentProps.title}e</Heading>
      </Box>
    <Container paddingTop='5px' margin={0}>
    <Box paddingBottom="5px">
      <Heading size={"sm"}>{localeStrings[locale][contentProps.region]}</Heading>
    </Box>
    <Box>
      Max Players: {contentProps.maxPlayers}
      <br/>
      Recommended CP: {contentProps.recommendedCP}
      <br/>
      Average Enemy Level: {contentProps.avgEnemyLvl}
    </Box>
  </Container>
    </Box>
  );
}

export default function PopupContent(props: any){
  const content = generateContentBody(props);
  return(
    <Box>
      {/* Title bar */}
      <Box sx={{backgroundColor: "#2b5e8d"}}>
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
