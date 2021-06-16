import { Box, Container, Heading } from '@chakra-ui/react'

export default function GatheringDialog(contentProps){
  return (
    <Box>
      {/* Title bar */}
      <Box sx={{backgroundColor: "#2b5e8d"}}>
        <Heading size="sm" padding="5px 0 5px 5px">{contentProps.materialName}</Heading>
      </Box>
  
      {/* Contents */}
      <Box margin={"5px"}  sx={{backgroundColor: "rgba(29,38,53,0.6)"}}>
        <Container margin={0}>
          <Box sx={{margin: "5px", padding: "5px", backgroundColor: "none"}}>
            {contentProps.usage}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
