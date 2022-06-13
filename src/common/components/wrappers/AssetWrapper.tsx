import { Image } from '@chakra-ui/react'

interface AssetWrapperProps {
  asset: string
  w?: number
  h?:number
}

export const AssetWrapper: React.FC<AssetWrapperProps> = ({
  asset,
  w = 18,
  h = 18,
}) => {
  return(
    <Image src={asset} w={`${w}px`} h={`${h}px`} ></Image>
  )
}