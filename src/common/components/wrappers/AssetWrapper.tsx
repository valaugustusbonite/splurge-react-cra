import { Image } from '@chakra-ui/react'

interface AssetWrapperProps {
  asset: string
}

export const AssetWrapper: React.FC<AssetWrapperProps> = ({
  asset
}) => {
  return(
    <Image src={asset} w='18px' h='18px'></Image>
  )
}