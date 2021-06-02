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
          sx={{backgroundColor: `Gainsboro`, boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.4)`, backdropFilter: `blur(20px)`, WebkitBackdropFilter: `blur(20px)`}}
        >
          <DrawerCloseButton />
          <DrawerHeader>PSO2:NGS World Map</DrawerHeader>

          <DrawerBody>

          <Box flex="1" w="100%" p={4} textAlign="center">
            <p>Welcome to the New Genesis World Map (<i>&beta;</i> ver)</p>
          </Box>
          <Box flex="1" bg="#DC3545" w="100%" p={4} color="white" textAlign="center">
            <p>This website is currently under development based on data available from the PHANTASY STAR ONLINE 2 NEW GENESIS closed <i>&beta;</i> test.</p>
            <br/>
            <p>Data shown here may vary from the final released product.</p>
          </Box>
          
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
            <AccordionButton _expanded={{ bg: "SteelBlue", color: "white" }}>
              <Box flex="1" textAlign="left">
                <h2>
                  Community
                </h2>
              </Box>
              <AccordionIcon />
            </AccordionButton>
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
            <Link href="https://pso2ngs.swiki.jp/" isExternal>
              <Box flex="1">
                PSO2 ニュージェネシス (PSO2：NGS) 攻略　Wiki
              </Box>
            </Link>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </DrawerBody>

          <DrawerFooter>
            <Box flex="1" textAlign="center">
              Map Data &copy; SEGA <Link href="https://pso2.com">PHANTASY STAR ONLINE 2 NEW GENESIS</Link>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
