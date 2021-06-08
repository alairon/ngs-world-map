import { Box, Container, Heading } from '@chakra-ui/react'

export default function ContainerDialog(contentProps){
  return (
    <Box>
      {/* Title bar */}
      <Box sx={{backgroundColor: "#2b5e8d"}}>
        <Heading size="sm" paddingTop="5px" paddingLeft="5px">{contentProps.title}</Heading>
      </Box>
  
      {/* Contents */}
      <Box margin={"5px"}  sx={{backgroundColor: "rgba(29,38,53,0.6)"}}>
        <Container margin={0}>
          <Box sx={{padding: "5px", backgroundColor: "none"}}>
            {contentProps.content}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
