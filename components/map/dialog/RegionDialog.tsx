import { Container, Box, Heading } from '@chakra-ui/react';
import {useRouter} from 'next/router';

function generateContentBody(contentProps){
  const {locale} = useRouter();
  const localeStrings = {
    "en": {
      "maxPlayers": "Max Players",
      "recommendedCP": "Rec. BP",
      "avgEnemyLvl": "Average Enemy Level"
    },
    "jp": {
      "maxPlayers": "Max Players",
      "recommendedCP": "推奨戦闘力",
      "avgEnemyLvl": "Average Enemy Level"
    } 
  }

  if (contentProps.region == 0){
    return (
      <Box>
        <b>{localeStrings[locale].maxPlayers}</b>: {contentProps.maxPlayers}
      </Box>
    )
  }
  return(
    <Box>
      <b>{localeStrings[locale].maxPlayers}</b>: {contentProps.maxPlayers}
      <br/>
      <b>{localeStrings[locale].recommendedCP}</b>: {contentProps.recommendedCP}
    </Box>
  );
}

export default function PopupContent(props: any){
  const content = generateContentBody(props);
  return(
    <Container margin={0}>
      <Box sx={{margin: "5px", padding: "5px", backgroundColor: "none"}}>
        <Heading size="sm">{props.contentHeader}</Heading>
        {content}
      </Box>
    </Container>
  );
}
