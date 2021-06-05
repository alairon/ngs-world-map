import { Box, ButtonGroup, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export async function getStaticProps({locale}){
  return {
    props: {
      locale
    }
  }
}

export default function SiteNav(props){
  return(
    <Box flex="1" w="100%" p={4} textAlign="center">
      <ButtonGroup>
        <NextLink href="./map" locale={props.locale}>
          <Button>
            <a>World Map</a>
          </Button>
        </NextLink>
        <NextLink href="./skillSim" locale={props.locale}>
          <Button disabled>
            <a>Skill Simulator</a>
          </Button>
        </NextLink>
      </ButtonGroup>
    </Box>
  )
}
