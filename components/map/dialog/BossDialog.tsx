import { Box, Container, Heading, ListIcon, ListItem, List } from "@chakra-ui/react";

import {useRouter} from 'next/router';

function generateContentBody(contentProps){
  const {locale} = useRouter();

  const localeStrings = {
    "en": {
      strings: {
        elementalWeakness: "Elemental Weakness"
      },
      enemyClass: {
        dolls: "DOLLS",
        alter: "ALTERS",
        formers: "FORMERS"
      },
      elementalWeakness: [
        "None",
        "Foie (Fire)",
        "Barta (Ice)",
        "Zonde (Lightning)",
        "Zan (Wind)",
        "Grants (Light)",
        "Megid (Dark)"
      ]
    },
    "jp": {
      strings: {
        elementalWeakness: "弱属性"
      },
      enemyClass: {
        dolls: "ドールズ",
        alter: "アルターズ",
        formers: "フォーマーズ"
      },
      elementalWeakness: [
        "無",
        "フォイエ (炎)",
        "バータ (氷)",
        "ゾンデ (雷)",
        "ザン (風)",
        "グランツ (光)",
        "メギド (闇)"
      ]
    }
  }

  return(
    <Container margin={0} padding={0}>
      <Box paddingTop={1} paddingBottom={1} textAlign="center">
        {contentProps.enemyClass}
      </Box>
      <Box>
        <b>{localeStrings[locale].strings.elementalWeakness}: </b>{localeStrings[locale].elementalWeakness[contentProps.elementalWeakness]}
      </Box>

    </Container>
  )
}

export default function EnemyDialog(props: any){
  const content = generateContentBody(props);
  return(
    <Box>
      {/* Title bar */}
      <Box sx={{backgroundColor: "#2b5e8d"}}>
        <Heading size="sm">{props.title}</Heading>
      </Box>

      {/* Contents */}
      <Box sx={{margin: "5px", padding: "5px", backgroundColor: "inherit"}}>
        <Heading size="sm">{props.contentHeader}</Heading>
        {content}
      </Box>
    </Box>
  )
}
