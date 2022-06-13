import { Navbar } from "common/components/navigation";
import { SwanlingCard } from "common/components/swanling";
import { Box, CircularProgress, Text} from "@chakra-ui/react";
import { useGetNewsfeed } from "../api/get_newsfeed_items";
import { Swanling } from "common/types";
import { NewsfeedItem } from "../types/newsfeed_decl";
import { NewsfeedCard } from "../components/NewsfeedCard";
import { NewsfeedItemOutput } from "../types/newsfeed_items_decl";

export const Newsfeed: React.FC = () => {

    return <div>
        <Navbar/>
        <NewsfeedListView />
    </div>
}

const NewsfeedListView: React.FC = () => {
    const { data , isLoading, isSuccess } = useGetNewsfeed(10, 0);

    if (data) {
        console.log(data.getNewsfeedItemsV2);
    }

    if (isLoading) {
        return(
            <CircularProgress />
        )
    }

   if (isSuccess) {
    return(
        
        data.getNewsfeedItemsV2.map((item: NewsfeedItemOutput) => 
            <NewsfeedCard 
                key={item.id}
                swanling={item.items[0]}
            />
        )
        
    )
   }

   return <Box></Box>
}