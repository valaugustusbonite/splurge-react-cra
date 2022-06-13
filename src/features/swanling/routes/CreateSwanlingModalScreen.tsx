import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'
import { SwanlingPreview } from 'features/swanling'
import { CustomCloseButton, ProceedButton } from 'common/components/buttons'

export const CreateSwanlingModalScreen: React.FC<{isOpen: boolean, onClose: () => void}> = ({isOpen, onClose}) => {

  return(
    <Modal
      isOpen={isOpen} 
      onClose={onClose} 
      size={'xl'} 
      closeOnOverlayClick={false} 
      isCentered
    >
        <ModalOverlay />
        <ModalContent>
          <CreateSwanlingHeader onClose={onClose}/>
          <CreateSwanlingModalBody />
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
      width='600px'
    >
      <Flex dir='row' alignItems='center' justifyContent='space-between'>
        <Flex dir='row' alignItems='center'>
          <CustomCloseButton onClick={onClose}/>
          <Box w='20px'></Box>
          <Text color='primaryWhite' fontSize='18px' fontWeight='bold'>
            Create a Swanling
          </Text>
        </Flex>
        <ProceedButton />
      </Flex>
    </ModalHeader>
  )
}

const CreateSwanlingModalBody: React.FC = () => {
  return (
    <ModalBody
      width='600px'
      borderRadius='0px'
      height='521px'
      padding='0px'
    >
      <SwanlingPreview />
    </ModalBody>       
  );
}