import { MenuList } from "@chakra-ui/react"

export interface DropdownMenuListProps {
  menuItems: React.ReactNode[],
  width?: number
}

export const DropdownMenuList: React.FC<DropdownMenuListProps> = ({
  menuItems,
  width,
}) => {
  return <MenuList backgroundColor='secondaryDark' border='none' padding='16px 0' width={`${width}px`}>
    {menuItems}
  </MenuList>
}