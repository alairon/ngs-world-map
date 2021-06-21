import { Box, Container, Heading, ListIcon, ListItem, List } from '@chakra-ui/react';
import { IoChevronForward } from 'react-icons/io5';

/* To do later: Convert this into props */
import {useRouter} from 'next/router';


/* ----- */

function generateContentBody(contentProps){
  const { locale } = useRouter();
  const localeStrings = {
    "en": {
      "title": "Urgent Quest",
      "partyLimit": "Party Limit",
      "recommendedCP": "Recommended Stats",
      "enemyLvl": "Enemy Level",
      "clearCondition": "Clear Condition",
      "failCondition": "Fail Condition",
      "mainMission": "Main Mission",
      "pointAllocation": "Score",
      "rewards": "Clear Reward",
      "firstReward": "First Clear Reward"
    },
    "jp": {
      "title": "緊急クエスト",
      "partyLimit": "パーティー",
      "recommendedCP": "推奨戦闘力",
      "enemyLvl": "エネミーレベル",
      "clearCondition": "クリア条件",
      "failCondition": "失敗条件",
      "mainMission": "メインミッション",
      "pointAllocation": "スコア",
      "rewards": "クリア報酬",
      "firstReward": "初回クリア報酬"
    }
  }

  return(
    <Container margin={0}>
      <Box paddingTop={1} paddingBottom={1}>
        <b>{localeStrings[locale].partyLimit}</b>: {contentProps.details.partyLimit}
        <br/>
        <b>{localeStrings[locale].recommendedCP}</b>: {contentProps.details.recommendedCP}
        <br/>
        <b>{localeStrings[locale].enemyLvl}</b>: {contentProps.details.enemyLvl}
        <br/>
        <b>{localeStrings[locale].clearCondition}</b>: {contentProps.details.clearCondition}
        <br/>
        <b>{localeStrings[locale].failCondition}</b>: {contentProps.details.failCondition}
      </Box>
      <Box>
        <Box paddingTop={2}>
          <Heading size={"xs"}>{localeStrings[locale].mainMission}</Heading>
          <List>
            {contentProps.details.mainMission.map((mission) => {
              return(
                <ListItem>
                  <ListIcon as={IoChevronForward} color="green.500"/>
                  {mission}
                </ListItem>
              )
            })}
          </List>
        </Box>

        <Box paddingTop={2}>
          <Heading size={"xs"}>{localeStrings[locale].rewards}</Heading>
          <List>
            {contentProps.details.rewards.map((reward) => {
              return(
                <ListItem>
                  {reward}
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box paddingTop={2}>
          <Heading size={"xs"}>{localeStrings[locale].firstReward}</Heading>
          <List>
            {contentProps.details.firstClearRewards.map((reward) => {
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

export default function EmergencyQuestDialog(props: any){
  const content = generateContentBody(props);
  return(
    <Box>
      {/* Title bar */}
      <Box>
        <Heading size="sm" textAlign="center">{props.name}</Heading>
      </Box>

      {/* Contents */}
      <Box sx={{margin: "5px", padding: "5px", backgroundColor: "inherit"}}>
        {content}
      </Box>
    </Box>
  );
}
