import { Center, Image, Flex, Box } from "@chakra-ui/react"
import BrandLogo from 'assets/icons/brand_logo.svg';
import BrandName from 'assets/icons/login/brand_name.svg';

export const SplashScreen: React.FC = () => {
  return <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center' flexDirection='column'>
    <Image src={BrandName}></Image>
    <Box height='20px'></Box>
    <Image src={BrandLogo}></Image>
  </Flex>
}