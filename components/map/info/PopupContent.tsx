import { Box, Heading, Text } from '@chakra-ui/react';

export default function PopupContent(props: any){
  return(
    <Box>
      <Box sx={{padding: "5px 5em 0 5px", backgroundColor: "#2b5e8d"}}>
        <Heading size="sm">{props.title}</Heading>
      </Box>
      <Box fontSize={"semibold"} sx={{margin: "5px", padding: "5px", backgroundColor: "#1d2635"}}>
        <b>{props.contentHeader}</b>
        <Box sx={{paddingTop:`5px`}}>
          {props.content}
        </Box>
      </Box>
    </Box>
  );
}
