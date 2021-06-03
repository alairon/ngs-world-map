import { Box } from '@chakra-ui/react';

export default function Notices(){
  return(
    <Box flex="1" bg="#DC3545" w="100%" p={4} color="white" textAlign="center">
      <p>This website is currently under development based on data available from the PHANTASY STAR ONLINE 2 NEW GENESIS closed <i>&beta;</i> test.</p>
      <br/>
      <p>Data shown here may vary from the final released product.</p>
    </Box>
  );
}
