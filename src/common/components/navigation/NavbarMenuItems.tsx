import { Flex, IconButton, Image, useDisclosure } from "@chakra-ui/react";
import Notif from 'assets/icons/feed_tab.svg';
import Home from 'assets/icons/home_tab.svg';
import Marketplace from 'assets/icons/search_tab.svg';
import Create from 'assets/icons/add_moment_tab.svg';
import { ProfileDropdown } from "./ProfileDropDown";
import { CreateSwanlingModalScreen } from "features/swanling";

export const NavbarMenuItems = () => {
    

    return <>
        <Flex flexDirection='row' alignItems='center'>
            <NavbarItem icon={<IconWrapper icon={Home}/>} ariaLabel='home'/>
            <NavbarItem icon={<IconWrapper icon={Marketplace}/>} ariaLabel='marketplace'/>
            <CreateIcon />
            <NavbarItem icon={<IconWrapper icon={Notif}/>} ariaLabel='notif'/>
            <ProfileDropdown />
            
        </Flex>
    </>
}

interface NavbarItemPropsInterface {
    icon: React.ReactElement,
    onClick?: () => void,
    ariaLabel: string,
}

const NavbarItem: React.FC<NavbarItemPropsInterface> = ({
    icon,
    onClick,
    ariaLabel
}) => {
    return <>
        <IconButton 
            aria-label={ariaLabel} 
            icon={icon} 
            h='23px' 
            w='23px' 
            marginX='20px' 
            backgroundColor='transparent' 
            onClick={onClick}
            _hover={{ bg: 'transparent'}}
            _focus={{ outline: '0' }}
            _active={{ backgroundColor: 'transparent'}}
        ></IconButton>
    </>
}

interface IconWrapperProps {
    icon:string,
}

const IconWrapper: React.FC<IconWrapperProps> = ({
    icon,
}) => {
    return(
        <Image src={icon} h='23px' w='23px' marginX='20px'></Image>
    )
}

const CreateIcon: React.FC = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    return(
        <div>
            <NavbarItem icon={<IconWrapper icon={Create}/>} ariaLabel='create' onClick={onOpen}/>
            <CreateSwanlingModalScreen onClose={onClose} isOpen={isOpen} />
        </div>
    )
}