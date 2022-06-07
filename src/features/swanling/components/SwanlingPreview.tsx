import { Box, Center, Flex, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { chooseFile } from "utils"

export const SwanlingPreview: React.FC = () => {
  
  const pickFile = () => {
    chooseFile();
  }

  return(
    <Flex
      backgroundColor='#696A6D'
      height='600px'
      width='600px'
      padding='0px'
      margin='0px'
      alignContent='center'
      justifyContent='center'
    >
      <label htmlFor="contained-button-file" className="m-0 w-100">
        <input
          style={{ display: 'none' }}
          id="contained-button-file"
          multiple
          type="file"
        />
      </label>
        {/* <Center>
            <Text color='primaryWhite' fontSize='13px'>
              Click here to select an image
            </Text>
          </Center> */}
    </Flex>
  )
}