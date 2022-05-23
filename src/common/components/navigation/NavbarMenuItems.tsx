import { Flex, Image } from "@chakra-ui/react";
import Notif from 'assets/icons/feed_tab.svg';
import Home from 'assets/icons/home_tab.svg';
import Marketplace from 'assets/icons/search_tab.svg';
import Create from 'assets/icons/add_moment_tab.svg';

export const NavbarMenuItems = () => {
    return <>
        <Flex flexDirection='row'>
            <NavbarItem icon={Home}/>
            <NavbarItem icon={Marketplace}/>
            <NavbarItem icon={Create}/>
            <NavbarItem icon={Notif}/>
        </Flex>
    </>
}

interface NavbarItemPropsInterface {
    icon: string,
}

const NavbarItem: React.FC<NavbarItemPropsInterface> = ({
    icon
}) => {
    return <>
        <Image src={icon} h='23px' w='23px' marginX='20px'></Image>
    </>
}