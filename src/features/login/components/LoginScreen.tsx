import { Flex, Box, Center, Text, Image } from '@chakra-ui/react';
import LoginBGDesktop from 'assets/backgrounds/login_desktop.png';
import BrandLogo from 'assets/icons/login/brand_name.svg';

const LoginScreen: React.FC = () => {
    return <Box w='100vw' h='100vh'>
        <Flex flexDirection='row' alignItems='center'>
            <Box w='50vw' h='100vh'>
                <Image src={LoginBGDesktop} alt='login' boxSize='100%' objectFit='cover'/>
            </Box>
            <Center w='50vw' backgroundColor='#0D0B0D' h='100vh' padding='0'>
                <Flex flexDirection='column'>
                    <Image src={BrandLogo} />
                    <Box h='30px'></Box>
                    <Text color='white'>The Social Marketplace for you</Text>
                </Flex>
            </Center>
        </Flex>
    </Box>
}

export default LoginScreen;