import { Swan } from "common/types/"

export type Swanling = {
  serial: string,
  title?: string,
  caption?: string,
  tags?: string[],
  createdAt: string,
  creator: Swan
}