import { Box, Container, Heading } from "@chakra-ui/react";

import {useRouter} from 'next/router';

function generateContentBody(contentProps){
  const {locale} = useRouter();

  const localeStrings = {
    "en": {
      strings: {
        elementalWeakness: "Elemental Weakness",
        classification: "Classification"
      },
      enemyClass: [ "DOLLS", "ALTERS", "FORMERS", "GIGANTIX" ],
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
        elementalWeakness: "弱属性",
        classification: "分類"
      },
      enemyClass: [ "ドールズ", "アルターズ", "フォーマーズ", "ギガンティクス"],
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
    <Container margin={0}>
      <Box sx={{margin: "5px"}}>
        <Box textAlign="center">
          <b>{localeStrings[locale].strings.classification}: </b>{localeStrings[locale].enemyClass[contentProps.enemyClass]}
        </Box>
        <Box textAlign="center">
          <b>{localeStrings[locale].strings.elementalWeakness}: </b>{localeStrings[locale].elementalWeakness[contentProps.elementalWeakness]}
        </Box>
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
