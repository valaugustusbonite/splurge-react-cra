import { Swan } from "common/types/"
import { valueFromAST } from "graphql"
import { Asset } from "./asset_decl"

export type Swanling = {
  serial: string,
  title?: string,
  caption?: string,
  tags?: string[],
  createdAt: string,
  user: Swan
  creator: Swan
  owner: Swan,
  assets: Asset[]
  objectURL: string,
  value: number
  commentsCount: number,
  purchasedByCount: number,
  isTrending: boolean,
}
