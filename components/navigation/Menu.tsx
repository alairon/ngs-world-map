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

export default function MenuDrawer(): JSX.Element{
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
        placement="left"
        size={"md"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent 
          sx={{backgroundColor: `Gainsboro`, boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.4)`, backdropFilter: `blur(20px)`, WebkitBackdropFilter: `blur(20px)`}}
        >
          <DrawerCloseButton />
          <DrawerHeader>PSO2:NGS Tools</DrawerHeader>

          <DrawerBody>
            <SiteNav />
            <Notices />
            <Resources />
          </DrawerBody>

          <DrawerFooter>
            <Box flex="1" fontSize="10pt" textAlign="center">
              <p>
                &copy; SEGA <Link href="https://pso2.com">PHANTASY STAR ONLINE 2 NEW GENESIS</Link>
              </p>
              <p>
                The materials used on this site (images, data, texts, etc.) are owned by SEGA CORPORATION and/or its subsidiaries.
              </p>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}
