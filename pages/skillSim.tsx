import Head from 'next/head';
import { useRouter } from 'next/router';

import { 
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  Tabs, Tab, TabList, TabPanels, TabPanel, Box, FormControl, FormLabel, RadioGroup, HStack, Radio, FormHelperText, background 
} from '@chakra-ui/react';
import SkillTree from '../components/skillTree/skillTree';
import NavBar from '../components/navigation/NavBar';

export default function SkillSim(){

  const router = useRouter();
  
  return (
    <main>
      <Head>
        <title>PSO2:NGS Skill Simulator</title>
        <meta name="description" content="Phantasy Star Online 2 New Genesis (PSO2:NGS) Skill Simulator"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <NavBar content={{title: "Skill Simulator"}}/>

      <Box p={1}>

      </Box>

      <Box flex="1" bg="#DC3545" w="100%" p={4} color="white" textAlign="center">
      <p>This page is currently a placeholder for the Skill Tree.</p>
    </Box>

      <Accordion allowToggle>
        <AccordionItem >
          <h2>
            <AccordionButton _expanded={{bg: "green", color: "white"}}>
              <Box flex="1">
                Class Information
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <FormControl id="classConfig">
              <Box p={2} sx={{borderColor: "gold", borderWidth:"2px"}}>
                <FormLabel id="mainClassLabel">Main Class</FormLabel>
                <RadioGroup id="mainClass">
                  <HStack space="24px">
                    <Radio value="hu">Hunter</Radio>
                    <Radio value="fi">Fighter</Radio>
                    <Radio value="ra">Ranger</Radio>
                    <Radio value="gu">Gunner</Radio>
                    <Radio value="fo">Force</Radio>
                    <Radio value="te">Techter</Radio>
                  </HStack>
                </RadioGroup>
              </Box>

              <Box p={2} mt={2} sx={{borderColor: "silver", borderWidth:"2px"}}>
                <FormLabel id="subClassLabel">Sub Class</FormLabel>
                <RadioGroup id="subClass">
                  <HStack space="24px">
                    <Radio value="hu">Hunter</Radio>
                    <Radio value="fi">Fighter</Radio>
                    <Radio value="ra">Ranger</Radio>
                    <Radio value="gu">Gunner</Radio>
                    <Radio value="fo">Force</Radio>
                    <Radio value="te">Techter</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </FormControl>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* Class Trees */}
      <Tabs isLazy isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab id="hu">Hunter</Tab>
          <Tab id="fi">Fighter</Tab>
          <Tab id="ra">Ranger</Tab>
          <Tab id="gu">Gunner</Tab>
          <Tab id="fo">Force</Tab>
          <Tab id="te">Techter</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id="huTree">
            <SkillTree />
          </TabPanel>
          <TabPanel id="fiTree">
            <SkillTree />
          </TabPanel>
          <TabPanel id="raTree">
            <SkillTree />
          </TabPanel>
          <TabPanel id="guTree">
            <SkillTree />
          </TabPanel>
          <TabPanel id="foTree">
            <SkillTree />
          </TabPanel>
          <TabPanel id="teTree">
            <SkillTree />
          </TabPanel>
        </TabPanels>
      </Tabs>

    </main>
  );
}
