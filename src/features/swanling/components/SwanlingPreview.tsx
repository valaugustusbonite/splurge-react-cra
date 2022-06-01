import { Box, Center, Text } from "@chakra-ui/react"

export const SwanlingPreview: React.FC = () => {
  return(
    <Box 
      backgroundColor='#696A6D'
      height='600px'
      width='100%'
      padding='0px'
      margin='0px'
    >
      <Center>
        <Text color='primaryWhite' fontSize='13px'>
          Click here to select an image
        </Text>
      </Center>
    </Box>
  )
}