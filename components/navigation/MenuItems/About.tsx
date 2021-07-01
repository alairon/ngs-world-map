import { Link, Box, Modal, ModalOverlay, ModalContent, Button, useDisclosure, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useRef } from 'react';

export default function AboutDialog(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  return(
    <div>
            <Button onClick={onOpen} sx={{backgroundColor: "rgba(85,84,88, 0.7)",
    color: "white",
    borderColor: `rgb(64,84,108)`,
    borderWidth: `1px`,
    borderRadius: `0px`, margin: 0,
    _hover: {borderColor: "#65EBF6", borderWidth: `1px`},
    _active: {backgroundColor: "rgb(74,122,167)", borderColor: "#65ebf6", borderWidth: '1px'}
    }}>
        About
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader textAlign="center">PSO2:NGS World Map</ModalHeader>
          <ModalBody>
              
            <Box>
              Thanks for checking out this site! If you would like to report an issue or provide suggestions, please message Snowthorne#7465 on Discord, or visit the <Link href="https://github.com/Snowthorne/ngs-world-map" isExternal sx={{textDecoration: "underline"}}>GitHub repository</Link>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Box flex="1" fontSize="10pt" textAlign="center">
              <p>
                &copy; SEGA <Link href="https://pso2.com" isExternal>PHANTASY STAR ONLINE 2 NEW GENESIS</Link>
              </p>
              <p>
                This is a fan site and is not associated with SEGA. The materials used on this site (images, data, texts, etc.) are owned by SEGA CORPORATION and/or its subsidiaries. All other trademarks, logos and copyrights are property of their respective owners.
              </p>
              <Box marginTop={4}>
                <Button onClick={onClose} sx={{padding:"0 5em", background:"rgb(58,85,114)",
                  color: "white",
                  borderColor: `rgb(64,84,108)`,
                  borderWidth: `1px`,
                  borderRadius: `0px`,
                  _hover: {backgroundColor: "rgb(51, 185, 196)", borderColor: "#65EBF6", borderWidth: `1px`}}
                } ref={initialRef}>
                  Close
                </Button>
              </Box>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </div>
  )
}
