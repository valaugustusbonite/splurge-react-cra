import { Box, Flex } from "@chakra-ui/react"
import { Swanling } from "common/types"
import { ProfileAvatar } from "../ProfileAvatar"
import { UserLink } from "../UserLink"

export interface SwanlingCardHeaderProps {
  swanling: Swanling
}

export const SwanlingCardHeader: React.FC<SwanlingCardHeaderProps> = ({
  swanling
}) => {
  console.log(swanling.creator);
  return(
    <Box borderTopRightRadius='lg' borderTopLeftRadius='24'>
      <Flex height='60px' padding='0 15px' width='100%' backgroundColor='#1F2124' dir='row' alignItems='center'>
        <Flex dir='row'>
          <ProfileAvatar size={40} />
          <Box width='7px'></Box>
          <Flex justifyContent='center' alignItems='flex-start'>
            <Box>
              <UserLink username="val.bonite"/>
              <UserLink username="Jan. 26, 2022"/>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
    
}