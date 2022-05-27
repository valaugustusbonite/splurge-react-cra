import { Button } from "@chakra-ui/react"

interface OutlineButtonInterface {
    buttonLabel: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const OutlineButton: React.FC<OutlineButtonInterface> = ({
    buttonLabel,
    onClick,
}) => {
    return <>
        <Button variant='outline' borderColor='primaryWhite' color='primaryWhite' onClick={onClick}>
            {buttonLabel}
        </Button>
    </>
}