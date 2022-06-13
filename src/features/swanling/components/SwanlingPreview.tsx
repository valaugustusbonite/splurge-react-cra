import { AspectRatio, Box, Center, Flex, FormLabel, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import { AssetWrapper } from "common/components";
import { useEffect, useRef, useState } from "react";
import { chooseFile } from "utils";
import bg from 'assets/backgrounds/swanling_buffer.png';

export const SwanlingPreview: React.FC = () => {

  return(
    <Flex
      backgroundColor='primaryDark'
      height='600px'
      // width='600px'
      padding='0px'
      margin='0px'
      alignContent='center'
      justifyContent='center'
      dir='column'
    >
      <Center>
        <Flex dir='column' alignItems='center'>
          <Box>
            <Center>
              <AssetWrapper asset={bg} w={250} h={250}/>
            </Center>
            <Box h='20px'></Box>
            <Text textAlign='center' color='primaryWhite'>
              Choose a photo to create a swanling
            </Text>
            <Box h='20px'></Box>
            <CustomUploadButton />
          </Box>
        </Flex>
      </Center>
    </Flex>
  )
}

const CustomUploadButton: React.FC = () => {
  return(
    <Center>
    <FormLabel 
       htmlFor="writeUpFile" 
       margin='0' 
       color='primaryDark' 
       fontWeight='semibold' 
       fontSize='13px'
       padding='10px 19px'
       borderRadius='5'
       bgGradient='linear(#E4D3B4 0%, #E4D3B4 25%, #AA9979 75%)'
       sx={{
         cursor: 'pointer'
       }}
     >Select from computer</FormLabel>
     <Input type='file' style={{ display: 'none' }} id='writeUpFile'></Input>
    </Center>
  );
}