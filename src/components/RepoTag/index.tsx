import React from "react"
import * as S from "./styled"

export interface TagProps {
  titleTag?: string
  bgTag?: string
}

export const RepoTag = ({ titleTag = "ReactJs", bgTag }: TagProps) => {
  return (
    <S.TagWrapper background={bgTag}>
      <h1>{titleTag}</h1>
    </S.TagWrapper>
  )
}
