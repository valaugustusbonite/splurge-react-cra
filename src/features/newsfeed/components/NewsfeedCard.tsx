import { Box } from "@chakra-ui/react"
import { SwanlingCard } from "common/components/swanling"
import { Swanling } from "common/types"

export interface NewsfeedCardProps {
  swanling?: Swanling
}

export const NewsfeedCard: React.FC<NewsfeedCardProps> = ({
  swanling
}) => {
  if (swanling !== null) {
    return <SwanlingCard swanling={swanling!}/>
  }

  return <Box></Box>
}