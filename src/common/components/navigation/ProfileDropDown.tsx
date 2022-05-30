import { Box, Menu, MenuButton, MenuItem, Image } from "@chakra-ui/react"
import { DropdownMenuList } from "../menu"
import { ProfileAvatar } from "../ProfileAvatar"
import LogoutIcon from 'assets/icons/logout.svg'
import { signOutGoogle } from "utils"
import { useAppDispatch } from "common/custom_hooks/use_app_dispatch"
import { errorInFetch, logout } from "features/login"
import { useAppSelector } from "common/custom_hooks/use_app_selector"

export interface ProfileDropdownItemProps {
  label: string,
  icon: string,
  onClick?: () => void,
}

export const ProfileDropdown: React.FC = () => {
  const { data } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const googleSignOut = async () => {
    try {
      await signOutGoogle();
      dispatch(logout())
    } catch (error) {
      dispatch(errorInFetch({ error }));
    }
  }


  return <Menu autoSelect={false}>
    <MenuButton>
      <ProfileAvatar photoUrl={data != null ? data.photoURL : ''}/>
    </MenuButton>
      <DropdownMenuList 
        width={375}
        menuItems={[
          <ProfileDropdownItem key={'logout'}  label="Logout" icon={LogoutIcon} onClick={googleSignOut} />
        ]}
      />
  </Menu>
}

const ProfileDropdownItem: React.FC<ProfileDropdownItemProps> = ({
  label,
  icon,
  onClick,
}) => {
  return  <MenuItem 
    _hover={{ bg: '#212121'}}
    color='primaryWhite'
    padding='12px 24px'
    backgroundColor='transparent'
    onClick={onClick}
  >
  <Image src={icon} h='23px' w='23px' marginX='20px' margin='0'></Image>
    <Box width='16px' />
    {label}
  </MenuItem>
}

