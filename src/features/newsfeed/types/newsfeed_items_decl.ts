import { Swan, Swanling } from "common/types"
import internal from "stream"
import { NewsfeedItem } from "./newsfeed_decl"

export const enum NewsfeedType { moment, followedUserPurchases, followedUserPurchasers }

export type NewsfeedItemOutput = {
  id: number,
  serial: string,
  type: NewsfeedType,
  userId: string,
  items: Swanling[]
  commentsCount: internal,
  user: Swan,
}