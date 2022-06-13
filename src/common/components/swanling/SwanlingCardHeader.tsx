import { Box, Flex, Text } from "@chakra-ui/react"
import { abbreviatedDate } from "common/helper/custom_formatter"
import { Swanling } from "common/types"
import { ProfileAvatar } from "../ProfileAvatar"
import { UserLink } from "../UserLink"

export interface SwanlingCardHeaderProps {
  swanling: Swanling
}

export const SwanlingCardHeader: React.FC<SwanlingCardHeaderProps> = ({
  swanling
}) => {
  let creator = swanling.creator;

  console.log(swanling.createdAt);

  return(
    <Flex height='60px' padding='0 15px' backgroundColor='#1F2124' dir='row' alignItems='center' borderTopRightRadius='8px' borderTopLeftRadius='8px'>
      <Flex dir='row'>
        <ProfileAvatar size={40} photoUrl={creator.photoURL}/>
        <Box width='7px'></Box>
        <Flex justifyContent='center' alignItems='flex-start'>
          <Box>
            <UserLink username={creator.username} />
            <Text 
              color='#8D9AA3'
              fontWeight='regular'
              fontSize='13'
            >
              {`${abbreviatedDate(swanling.createdAt)}`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
    
}