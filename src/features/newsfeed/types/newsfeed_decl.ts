import { Swan } from "common/types"
import { Asset } from "common/types/asset_decl"

export type NewsfeedItem = {
  id: string,
  serial: string,
  caption?: string,
  title?: string,
  tags: []
  creator: Swan
  owner: Swan,
  assets: Asset[]
  objectURL: string,
  value: number
  createdAt: string,
  commentsCount: number,
  purchasedByCount: number,
  isTrending: boolean,
}