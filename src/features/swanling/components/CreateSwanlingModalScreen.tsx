import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
  Box,
  Image,
  IconButton
} from '@chakra-ui/react'
import { SwanlingPreview } from 'features/swanling'
import { CustomCloseButton } from 'common/components/buttons'

export const CreateSwanlingModalScreen: React.FC<{isOpen: boolean, onClose: () => void}> = ({isOpen, onClose}) => {
  
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <CreateSwanlingHeader onClose={onClose}/>
          <ModalBody
            maxWidth='786px'
            backgroundColor='red'
            borderRadius='0px'
            height='521px'
            padding='0px'
          >
            <SwanlingPreview />
          </ModalBody>        
        </ModalContent>
      </Modal>
  );
}

interface CreateSwanlingHeaderProps {
  onClose?: () => void,
}

const CreateSwanlingHeader: React.FC<CreateSwanlingHeaderProps> = ({
  onClose
}) => {
  return ( 
    <ModalHeader
      borderRadius='0px'
      backgroundColor='#1F2124'
      height='60px'
    >
      <Flex dir='row' alignItems='center'>
        <Flex dir='row' alignItems='center'>
          <CustomCloseButton onClick={onClose}/>
          <Box w='20px'></Box>
          <Text color='primaryWhite' fontSize='18px' fontWeight='bold'>
            Create a Swanling
          </Text>
          
        </Flex>
      </Flex>
    </ModalHeader>
  )
}