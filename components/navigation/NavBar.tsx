import { Flex, Box, Spacer, Heading } from '@chakra-ui/react';
import MenuDrawer from './Menu'; 
import LanguageSelector from './MenuItems/Languages';

export default function NavBar(props){
  let title = props.content.title ? props.content.title : "PSO2:NGS Tools";

  return(
    <nav>
      <Flex position="fixed" width={"100%"} zIndex={1200} bg={"rgba(85, 84, 88, 0.95)"} sx={{backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
        <Box p="2" zIndex={"auto"}>
          <Heading size="md" color="white">{`${title}`}</Heading>
        </Box>
        <Spacer />
        <LanguageSelector />
        <MenuDrawer/>
      </Flex>
    </nav>
  );
}
