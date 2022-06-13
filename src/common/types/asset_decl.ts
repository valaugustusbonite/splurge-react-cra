import { MomentCategoryEnum } from "common/enums/enums"

export type Asset = {
  type: MomentCategoryEnum,
  url: string,
  thumbnail: string
  text?: string,
}
