import { Flex, Box, Spacer, Heading } from '@chakra-ui/react';
import MenuDrawer from './Menu';

export default function NavBar(){
  return(
    <nav>
      <Flex>
        <MenuDrawer/>
        <Box p="2">
          <Heading size="md">PSO2:NGS World Map</Heading>
        </Box>
        <Spacer />
      </Flex>
    </nav>
  );
}
