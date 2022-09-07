import { TagProps } from "../RepoTag/intercafe"

export interface RepoProps{
  slug?: string
  img?: string
  title: string
  description: string
  tags: TagProps[]
}
