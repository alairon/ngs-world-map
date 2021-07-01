import { Flex, Box, Spacer, Heading } from '@chakra-ui/react';
import LanguageSelector from './MenuItems/Languages';
import About from './MenuItems/About'

export default function NavBar(props){
  let title = props.content.title ? props.content.title : "PSO2:NGS Tools";

  return(
    <nav>
      <Flex position="fixed" width={"100%"} zIndex={1200} bg={"rgba(64, 84, 108, 0.95)"} sx={{backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
        <Box p="2" zIndex={"auto"} maxWidth={"40%"}>
          <Heading size="md" color="white" isTruncated>{`${title}`}</Heading>
        </Box>
        <Spacer />
        <About/>
        <LanguageSelector />
      </Flex>
    </nav>
  );
}
