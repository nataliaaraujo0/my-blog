import React from "react"
import { TagProps } from "./intercafe"
import * as S from "./styled"

export const RepoTag = ({ titleTag = "ReactJs", bgTag }: TagProps) => {
  return (
    <S.TagWrapper background={bgTag}>
      <h1>{titleTag}</h1>
    </S.TagWrapper>
  )
}
