import { Box, Flex, Image, Center, useMediaQuery } from "@chakra-ui/react"
import BrandLogo from 'assets/icons/login/brand_name.svg';
import { NavbarMenuItems } from "common/components/navigation";
import { ColorTheme } from "configurations";


export const Navbar: React.FC = () => {
    const [ isMobile ] = useMediaQuery("(max-width: 768px)");

    
    return <>
        <Center backgroundColor='primaryDarkGray' dir='row' justifyContent='center' alignItems='center'>
            <Center maxW='1440px'>
                <Flex h='61px' w='100vw'  dir='row' justifyContent='space-between' alignItems='center'>
                    <Image src={BrandLogo} alt='brand-logo' h='40px' objectFit='cover' margin='0 0 0 20px'/>
                    <NavbarMenuItems />
                </Flex>
            </Center>
        </Center>
    </>
}
