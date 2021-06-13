import { Box, Container, Heading, ListIcon, ListItem, List } from '@chakra-ui/react';
import { IoCheckbox } from 'react-icons/io5';

/* To do later: Convert this into props */
import {useRouter} from 'next/router';


/* ----- */

function generateContentBody(contentProps){
  const { locale } = useRouter();

const localeStrings = {
  "en": {
    "partyLimit": "Party Limit",
    "recommendedCP": "Recommended Stats",
    "enemyLvl": "Lv. of Enemies Present",
    "clearCondition": "Clear Condition",
    "failCondition": "Fail Condition",
    "mainMission": "Main Mission",
    "sideMission": "Side Missions",
    "rewards": "1st Clear Reward",
    "firstReward": ""
  },
  "jp": {
    "partyLimit": "パーティー",
    "recommendedCP": "推奨戦闘力",
    "clearCondition": "クリア条件",
    "failCondition": "失敗条件",
    "mainMission": "メインミッション",
    "sideMission": "サイドミッション",
    "rewards": "初回クリア報酬",
    "firstReward": ""
  }
}
  return(
    <Container margin={0}>
      <Box paddingTop={1} paddingBottom={1}>
        <b>{localeStrings[locale].partyLimit}</b>: {contentProps.partyLimit}
        <br/>
        <b>{localeStrings[locale].recommendedCP}</b>: {contentProps.recommendedCP}
        <br/>
        <b>{localeStrings[locale].clearCondition}</b>: {contentProps.clearCondition}
        <br/>
        <b>{localeStrings[locale].failCondition}</b>: {contentProps.failCondition}
      </Box>
      <Box>
        <Box paddingTop={2}>
          <Heading size={"xs"}>{localeStrings[locale].mainMission}</Heading>
          <List>
            {contentProps.mainMission.map((mission) => {
              return(
                <ListItem>
                  <ListIcon as={IoCheckbox} color="green.500"/>
                  {mission}
                </ListItem>
              )
            })}
          </List>
        </Box>

        <Box paddingTop={2}>
          <Heading size={"xs"}>{localeStrings[locale].sideMission}</Heading>
          <List>
            {contentProps.sideMission.map((mission) => {
              return(
                <ListItem>
                  <ListIcon as={IoCheckbox} color="green.500"/>
                  {mission}
                </ListItem>
              )
            })}
          </List>
        </Box>

        <Box paddingTop={2}>
          <Heading size={"xs"}>{localeStrings[locale].rewards}</Heading>
          <List>
            {contentProps.rewards.map((reward) => {
              return(
                <ListItem>
                  {reward}
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Box>
    </Container>
  );
}

export default function TrialDialog(props: any){
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
  );
}
