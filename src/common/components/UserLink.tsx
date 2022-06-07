import { Text } from '@chakra-ui/react'

export interface UserLinkProps {
  username: string,
}

export const UserLink: React.FC<UserLinkProps> = ({
  username
}) => {
  return(
    <Text
      fontSize='15px'
      color='#DEE3E8'
      fontWeight='semibold'
    >
      {username}
    </Text>
  )
}