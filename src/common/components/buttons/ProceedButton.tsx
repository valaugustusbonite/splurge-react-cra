import { IconButton } from "@chakra-ui/react"
import CloseIcon from 'assets/icons/arrow_forward.svg'
import { AssetWrapper } from "common/components"

interface ProceedButtonProps {
  onClick?: () => void
}

export const ProceedButton: React.FC<ProceedButtonProps> = ({
  onClick
}) => {
  return(
    <IconButton 
        aria-label='proceed'
        icon={<AssetWrapper asset={CloseIcon} w={26} h={26}/>} 
        h='28px' 
        w='28px' 
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