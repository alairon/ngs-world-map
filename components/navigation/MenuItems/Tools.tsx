import { Button, MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import Link from 'next/link';

export default function ToolMenu(){
  return(
    <Menu>
      <MenuButton as={Button}>
        Tools
      </MenuButton>
      <MenuList position={"relative"} zIndex={100000}>
          <Link href={`./maps`} passHref>
        <MenuItem>
            World Map
        </MenuItem>
          </Link>
          <Link href={`./skillSim`} passHref>
        <MenuItem>
            Skill Simulator
        </MenuItem>
          </Link>
      </MenuList>
    </Menu>
  );
}
