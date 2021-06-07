import { Button, MenuButton, MenuItem, MenuList, Menu, Icon } from '@chakra-ui/react';
import { MdLanguage } from 'react-icons/md'
import { useRouter } from 'next/router';
import Link from 'next/link';

export function LangString(){
  const { locale } = useRouter();
  switch (locale){
    case 'en':
      return(<span><Icon as={MdLanguage}/>&nbsp;Language</span>);
    case 'jp':
      return(<span><Icon as={MdLanguage}/>&nbsp;言語</span>)
    default:
      return(<span><Icon as={MdLanguage}/>&nbsp;Language</span>);
  }
}

export default function LanguageSwitcher(){
  const { asPath }= useRouter();
  return(
    <Menu>
      <MenuButton as={Button} sx={{backgroundColor: "rgb(85,84,88, 0.7)",
    color: "white",
    borderColor: `rgb(64,84,108)`,
    borderWidth: `1px`,
    borderRadius: `0px`, margin: 0,
    _hover: {borderColor: "#65EBF6", borderWidth: `1px`},
    _active: {backgroundColor: "rgb(74,122,167)", borderColor: "#65ebf6", borderWidth: '1px'}
    }}>
        <LangString/>
      </MenuButton>
      <MenuList>
        <Link href={`en${asPath}`} locale="en" passHref>
          <MenuItem>
            English
          </MenuItem>
        </Link>
        <Link href={`${asPath}`} locale="jp" passHref>
          <MenuItem>
            日本語
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
