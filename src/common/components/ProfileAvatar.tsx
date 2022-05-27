import { Avatar } from "@chakra-ui/react"
import { useAppSelector } from "common/custom_hooks/use_app_selector"
import { useEffect, useState } from "react";

export const ProfileAvatar: React.FC = () => {
  //const { photoURL } = useAppSelector((state) => state.authReducer.data);


  return <Avatar src='' w='23px' h='23px' margin='0 20px'/>
}