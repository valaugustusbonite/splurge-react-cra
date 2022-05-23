import { Box, Flex, Image } from "@chakra-ui/react"
import BrandLogo from 'assets/icons/login/brand_name.svg';
import { NavbarMenuItems } from "common/components/navigation";


export const Navbar: React.FC = () => {
    return <>
    <Flex h='61px' w='100vw' backgroundColor='appDarkGray' dir='row' justifyContent='space-between' alignItems='center'>
        <Image src={BrandLogo} alt='brand-logo' h='40px' objectFit='cover'/>
        <NavbarMenuItems />
    </Flex>
    </>
}
