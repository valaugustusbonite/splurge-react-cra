import { Flex, Box, Center, Text, Image, useMediaQuery } from '@chakra-ui/react';
import LoginBGDesktop from 'assets/backgrounds/login_desktop.png';
import BrandLogo from 'assets/icons/login/brand_name.svg';
import { OutlineButton } from 'common/components/buttons';
import { signInWithGooglePopup } from 'utils';
import { userReceived, logout, errorInFetch } from 'features/login/slices/auth_slice';
import { useAppDispatch } from 'common/custom_hooks/use_app_dispatch';

export const LoginScreen: React.FC = () => {
    const [ isMobile ] = useMediaQuery("(max-width: 768px)");
    const dispatch = useAppDispatch();

    const signInWithGoogle = async () => {
       try {
        const response = await signInWithGooglePopup();

        if (!response) {
            return;
        }

        const { user } = response;
        dispatch(userReceived({
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
        }));


       } catch (error) {
        dispatch(logout());
        dispatch(errorInFetch({ error }))
       }
    }

    return <>
        <Box w='100vw' h='100vh'>
            <Flex flexDirection={isMobile ? 'column' : 'row'} alignItems='center'>
                <Box w={isMobile ? '100vw' : '50vw'} h={isMobile ? '50vh' : '100vh'}>
                    <Image src={LoginBGDesktop} alt='login' boxSize='100%' objectFit='cover'/>
                </Box>
                <Center w={isMobile ? '100vw' : '50vw'} h={isMobile ? '50vh' : '100vh'} backgroundColor='primaryDark' padding='0'>
                    <Flex flexDirection='column'>
                        <Image src={BrandLogo} />
                        <Box h='30px'></Box>
                        <Text color='white'>The Social Marketplace for you</Text>
                        <Box h='30px'></Box>
                        <OutlineButton 
                            buttonLabel='Sign in with Google' 
                            onClick={signInWithGoogle}
                        />
                    </Flex>
                </Center>
            </Flex>
        </Box>
    </>
}