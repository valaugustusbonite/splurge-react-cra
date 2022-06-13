import { Avatar } from "@chakra-ui/react"

interface ProfileAvatarProps {
  photoUrl?: string,
  size?: number,
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  photoUrl,
  size = 46
}) => {

  return <Avatar src={photoUrl ?? ''} w={`${size}px`} h={`${size}px`} margin='0 20px'/>
}