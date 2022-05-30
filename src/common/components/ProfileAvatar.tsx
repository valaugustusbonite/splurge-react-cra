import { Avatar } from "@chakra-ui/react"

interface ProfileAvatarProps {
  photoUrl?: string
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  photoUrl
}) => {

  return <Avatar src={photoUrl ?? ''} w='23px' h='23px' margin='0 20px'/>
}