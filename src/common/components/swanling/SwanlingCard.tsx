import { Box } from "@chakra-ui/react"
import { SwanlingCardHeader } from "common/components/swanling";
import { SwanlingDisplay } from "common/components/swanling";
import { Swanling } from "common/types";

export interface SwanlingCardProps {
  swanling: Swanling
}

export const SwanlingCard: React.FC<SwanlingCardProps> = ({
  swanling
}) => {
  
  return(
    <Box maxWidth='565px'>
      <SwanlingCardHeader swanling={swanling}/>
      <SwanlingDisplay />
    </Box>
  );
}