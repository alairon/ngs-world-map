import { useRef } from 'react';
import { 
  Button, Box, Link,
  Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, DrawerFooter, DrawerCloseButton,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  useDisclosure, 
  Spacer
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function MenuDrawer(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return(
    <div>
      <Button leftIcon={<HamburgerIcon/>} ref={btnRef} colorScheme="blue" onClick={onOpen}>
        Menu
      </Button>
      <Drawer 
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        size={"md"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent 
          sx={{backgroundColor: `Gainsboro`, boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.4)`, backdropFilter: `blur(20px)`, WebkitBackdropFilter: `blur(20px)`, borderRadius: `10px`}}
        >
          <DrawerCloseButton />
          <DrawerHeader>PSO2:NGS World Map</DrawerHeader>

          <DrawerBody>

          <Box flex="1" w="100%" p={4} textAlign="center">
            <p>Welcome to the New Geneis World Map!</p>
          </Box>
          <Box flex="1" bg="tomato" w="100%" p={4} color="white">
            <p>This website is currently under development based on the data available from the Global PHANTASY STAR ONLINE 2 NEW GENESIS closed &beta; test.</p>
            <br/>
            <p>Data shown here may vary from the final released product.</p>
          </Box>
          
          <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: "SteelBlue", color: "white" }}>
        <Box flex="1" textAlign="left">
          Official Sites
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      <Link href="https://pso2.com" isExternal>
        <Box flex="1">
          Phantasy Star Online 2 Global
        </Box>
      </Link>
      <Link href="https://pso2.jp" isExternal>
        <Box>
          Phantasy Star Online 2 JP
        </Box>
      </Link>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: "SteelBlue", color: "white" }}>
        <Box flex="1" textAlign="left">
          Community
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      <Box flex="1" textAlign="left">
        <b>Global</b>
      </Box>
        <Link href="https://na.arks-layer.com" isExternal>
          <Box>
            Arks-Layer (Global)
          </Box>
        </Link>
        <Link href="https://pso2na.arks-visiphone.com/wiki/Portal:New_Genesis" isExternal>
          <Box>
            Arks-Visiphone (Global)
          </Box>
        </Link>
        <Link href="https://new-gen.rappy-burst.com/" isExternal>
          <Box flex="1">
            Rappy Burst
          </Box>
        </Link>
      <Box>&nbsp;</Box>
      <Box flex="1" textAlign="left">
        <b>Japan</b>
      </Box>
      <Link href="http://arks-layer.com" isExternal>
        <Box flex="1">
          Arks-Layer (JP)
        </Box>
      </Link>
      <Link href="https://pso2.arks-visiphone.com/wiki/Portal:New_Genesis" isExternal>
        <Box flex="1">
          Arks-Visiphone (JP)
        </Box>
      </Link>
      <Link href="https://www.bumped.org/psublog/" isExternal>
        <Box flex="1">
          Bumped (PSU Blog)
        </Box>
      </Link>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
        <Box flex="1" textAlign="left">
          Click me to see a different style
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </DrawerBody>

          <DrawerFooter>
            {<div>Map Data &copy; SEGA <a href="https://pso2.com" rel="noreferrer" target="_blank">PHANTASY STAR ONLINE 2 NEW GENESIS</a></div>}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
