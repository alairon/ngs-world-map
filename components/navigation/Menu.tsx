import { useRef } from 'react';
import { 
  Button, Box, Link,
  Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, DrawerFooter, DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import SiteNav from './MenuItems/SiteNav';
import Notices from './MenuItems/Notices';
import Resources from './MenuItems/Resources';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function MenuDrawer(props): JSX.Element{
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return(
    <nav>
      <Button leftIcon={<HamburgerIcon/>} borderRadius="1px" ref={btnRef} colorScheme="blue" onClick={onOpen}>
        Menu
      </Button>
      <Drawer 
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size={"md"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent 
          sx={{backgroundColor: `Gainsboro`, boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.4)`, backdropFilter: `blur(20px)`, WebkitBackdropFilter: `blur(20px)`}}
        >
          <DrawerHeader>PSO2:NGS Tools</DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            <SiteNav />
            <Notices />
            <Resources />
          </DrawerBody>

          <DrawerFooter>
            <Box flex="1" fontSize="10pt" textAlign="center">
              <p>
                &copy; SEGA <Link href="https://pso2.com" isExternal>PHANTASY STAR ONLINE 2 NEW GENESIS</Link>
              </p>
              <p>
                This is a fan site and is not associated with SEGA. The materials used on this site (images, data, texts, etc.) are owned by SEGA CORPORATION and/or its subsidiaries. All other trademarks, logos and copyrights are property of their respective owners.
              </p>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}
