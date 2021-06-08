import { Box, Container, Heading } from '@chakra-ui/react';

function generateContentBody(contentProps){
  return(
    <Container margin={0}>
      <Box paddingBottom="5px">
        {contentProps}
      </Box>
    </Container>
  );
}

export default function PopupContent(props: any){
  const content = generateContentBody(props);
  return(
    <Box>
      {/* Title bar */}
      <Box sx={{backgroundColor: "#2b5e8d"}}>
        <Heading size="sm">{props.title}</Heading>
      </Box>

      {/* Contents */}
      <Box fontSize={"semibold"} sx={{padding: "5px", paddingTop: "10px", backgroundColor: "inherit"}}>
        <Heading as={"h3"} size="sm">{props.contentHeader}</Heading>
        {content}
      </Box>
    </Box>
  );
}
