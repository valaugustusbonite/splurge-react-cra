import { Text } from "@chakra-ui/react"
import '@fontsource/poppins'

export const enum PoppinsType {
  headingOne,
  headingTwo,
  headingThree,
  headingFour,
  labelOne,
  labelTwo,
  subtitleOne,
  subtitleTwo,
  buttonsLarge,
  buttonsSmall,
  bodyOne,
  bodyTwo,
  smallTextOne,
  smallTextTWo,
}

export interface PoppinsTextProps {
  text: string
  type: PoppinsType,
}

export const PoppinsText: React.FC<PoppinsTextProps> = ({
  text
}) => {
  return (
    <Text
      fontFamily="Poppins"
    >
      {text}
    </Text>
  )
}
