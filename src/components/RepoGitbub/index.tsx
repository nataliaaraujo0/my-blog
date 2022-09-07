import React from "react"
import { RepoTag } from "../RepoTag"
import { RepoProps } from "./interface"

import * as S from "./styled"

export const RepoGithub = ({
  slug,
  img,
  title = "titlo",
  description = "descricao",
  tags = [],
}: RepoProps) => {
  return (
    <S.RepoLink to={slug}>
      <S.RepoItemWrapper>
        <S.RepoImage>
          <img>{img}</img>
        </S.RepoImage>
        <S.ContentInfoWrapper>
          <h1>{title}</h1>
          <p>{description}</p>
          <S.RepoTagList>
            {tags?.map((tag, i) => (
              <RepoTag key={i} titleTag={tag.titleTag} bgTag={tag.bgTag} />
            ))}
          </S.RepoTagList>
        </S.ContentInfoWrapper>
      </S.RepoItemWrapper>
    </S.RepoLink>
  )
}
