import { Flex, Box, Spacer, Heading, useProps } from '@chakra-ui/react';
import MenuDrawer from './Menu'; 
import LanguageSelector from './MenuItems/Languages';

export default function NavBar(props){
  let title = props.content.title ? props.content.title : "PSO2:NGS Tools";

  return(
    <nav>
      <Flex>
        <MenuDrawer />
        <Box p="2">
          <Heading size="md">{`${title}`}</Heading>
        </Box>
        <Spacer />
        <LanguageSelector />
      </Flex>
    </nav>
  );
}
