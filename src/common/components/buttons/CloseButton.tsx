import { IconButton } from "@chakra-ui/react"
import CloseIcon from 'assets/icons/close.svg'
import { AssetWrapper } from "common/components"

interface CloseButtonProps {
  onClick?: () => void
}

export const CustomCloseButton: React.FC<CloseButtonProps> = ({
  onClick
}) => {
  return(
    <IconButton 
        aria-label='close'
        icon={<AssetWrapper asset={CloseIcon} />} 
        h='23px' 
        w='23px' 
        paddingX='20px'
        margin='0px'
        backgroundColor='transparent' 
        onClick={onClick}
        _hover={{ bg: 'transparent'}}
        _focus={{ outline: '0' }}
        _active={{ backgroundColor: 'transparent'}}
    ></IconButton>
  )
}