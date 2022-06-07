import { Navbar } from "common/components/navigation";
import { SwanlingCard } from "common/components/swanling";
import { Box, CircularProgress, Text} from "@chakra-ui/react";
import { useGetNewsfeed } from "../api/get_newsfeed_items";
import { Swanling } from "common/types";

export const Newsfeed: React.FC = () => {

    return <div>
        <Navbar/>
        <NewsfeedListView />
    </div>
}

const NewsfeedListView: React.FC = () => {
    const { data , isLoading, isSuccess } = useGetNewsfeed(10, 0);

    console.log(data.getNewsfeedItemsV2[0].user);

    if (isLoading) {
        return(
            <CircularProgress />
        )
    }

   if (isSuccess) {
    return(
        
        data.getNewsfeedItemsV2.map((swanling: Swanling) => 
            <SwanlingCard swanling={swanling} key={swanling.serial}/>
        )
        
    )
   }

   return <Box></Box>
}