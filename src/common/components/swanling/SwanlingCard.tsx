import { Container } from "@chakra-ui/react"
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
    <Container
      maxWidth='565px' 
      margin='8px 0'
    >
      <SwanlingCardHeader swanling={swanling}/>
      <SwanlingDisplay />
    </Container>
  );
}