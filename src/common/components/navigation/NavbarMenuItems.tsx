import { Flex, Image } from "@chakra-ui/react";
import Notif from 'assets/icons/feed_tab.svg';
import Home from 'assets/icons/home_tab.svg';
import Marketplace from 'assets/icons/search_tab.svg';
import Create from 'assets/icons/add_moment_tab.svg';
import { Link } from "react-router-dom";

export const NavbarMenuItems = () => {
    return <>
        <Flex flexDirection='row'>
            <NavbarItem 
                icon={Home}
                routeName='/'
            />
            <NavbarItem 
                icon={Marketplace}
                routeName='/marketplace'
            />
            <NavbarItem 
                icon={Create}
                routeName='/'
            />
            <NavbarItem 
                icon={Notif}
                routeName='/notifications'
            />
        </Flex>
    </>
}

interface NavbarItemPropsInterface {
    icon: string,
    onPress?: () => void,
    routeName: string,
}

const NavbarItem: React.FC<NavbarItemPropsInterface> = ({
    icon,
    routeName
}) => {
    return <>
        <nav>
            <Link to={routeName}>
                <Image src={icon} h='23px' w='23px' marginX='20px'></Image>
            </Link>
        </nav>
    </>
}