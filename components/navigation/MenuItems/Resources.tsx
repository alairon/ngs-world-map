import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Link } from '@chakra-ui/react';

export default function Resources(){
  return(
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton _expanded={{ bg: "SteelBlue", color: "white" }}>
          <Box flex="1" textAlign="left">
            <h2>
              Official Sites
            </h2>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Link href="https://pso2.com" isExternal>
            <Box p={1}>
              Phantasy Star Online 2 Global
            </Box>
          </Link>
          <Link href="https://pso2.jp" isExternal>
            <Box p={1}>
              Phantasy Star Online 2 JP
            </Box>
          </Link>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton _expanded={{ bg: "SteelBlue", color: "white" }}>
        <Box flex="1" textAlign="left">
          <h2>
            Community Sites
          </h2>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
      <Box p={1} textAlign="left">
        <b>Global</b>
      </Box>
        <Link href="https://na.arks-layer.com" isExternal>
          <Box p={1}>
            Arks-Layer (Global)
          </Box>
        </Link>
        <Link href="https://pso2na.arks-visiphone.com/wiki/Portal:New_Genesis" isExternal>
          <Box p={1}>
            Arks-Visiphone (Global)
          </Box>
        </Link>
        <Link href="https://new-gen.rappy-burst.com/" isExternal>
          <Box p={1}>
            Rappy Burst
          </Box>
        </Link>
      <Box>&nbsp;</Box>
      <Box flex="1" textAlign="left">
        <b>Japan</b>
      </Box>
      <Link href="http://arks-layer.com" isExternal>
        <Box p={1}>
          Arks-Layer (JP)
        </Box>
      </Link>
      <Link href="https://pso2.arks-visiphone.com/wiki/Portal:New_Genesis" isExternal>
        <Box p={1}>
          Arks-Visiphone (JP)
        </Box>
      </Link>
      <Link href="https://www.bumped.org/psublog/" isExternal>
        <Box p={1}>
          Bumped (PSU Blog)
        </Box>
      </Link>
      <Link href="https://pso2ngs.swiki.jp/" isExternal>
        <Box p={1}>
          PSO2 ニュージェネシス (PSO2：NGS) 攻略　Wiki
        </Box>
      </Link>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  );
}
