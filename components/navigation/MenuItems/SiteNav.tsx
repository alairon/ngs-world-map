import { Box, ButtonGroup, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function SiteNav(){
  return(
    <Box flex="1" w="100%" p={4} textAlign="center">
      <ButtonGroup>
        <NextLink href="./map">
          <Button>
            <a>World Map</a>
          </Button>
        </NextLink>
        <NextLink href="./skillSim">
          <Button>
            <a>Skill Simulator</a>
          </Button>
        </NextLink>
      </ButtonGroup>
    </Box>
  )
}
