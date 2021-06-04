import { Flex, Box, Spacer, Heading } from '@chakra-ui/react';
import MenuDrawer from './Menu';

export async function getStaticProps(){
  return {
    props: {}
  }
}

export default function NavBar(props){
  let title = props.content.title ? props.content.title : "PSO2:NGS Tools";
  
  return(
    <nav>
      <Flex>
        <MenuDrawer/>
        <Box p="2">
          <Heading size="md">{`${title}`}</Heading>
        </Box>
        <Spacer />
      </Flex>
    </nav>
  );
}
