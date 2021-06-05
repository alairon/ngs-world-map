import { Button, ButtonGroup } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher(){
  const { asPath }= useRouter();
  return(
    <ButtonGroup>
      <Button>
        <Link href={`en${asPath}`} locale="en">
          English
        </Link>
      </Button>
      <Button>
        <Link href={`jp${asPath}`} locale="jp">
          日本語
        </Link>
      </Button>
    </ButtonGroup>
  );
}
