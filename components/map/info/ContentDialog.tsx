import { Box, Heading } from '@chakra-ui/react';

export default function ContentDialog(props: any){
  return(
    <Box>
      {/* Title bar */}
      <Box sx={{backgroundColor: "#2b5e8d"}}>
        <Heading size="sm" paddingTop="5px" paddingLeft="5px">{props.title}</Heading>
      </Box>

      {/* Contents */}
      <Box fontSize={"semibold"} sx={{backgroundColor: "rgba(29,38,53,0.6)"}}>
        <Heading size="sm" paddingLeft={5} paddingTop={3}>{props.contentHeader}</Heading>
        {props.content}
      </Box>
    </Box>
  );
}
