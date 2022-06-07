import { Type } from "typescript"

export const fromJson = (arg: Type): {arg: Type} => {
  return {
    arg
  }
}