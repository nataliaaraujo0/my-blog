import { TagProps } from "../RepoTag/intercafe"

export interface RepoProps{
  slug?: string
  title: string
  description: string
  tags: TagProps[]
}
