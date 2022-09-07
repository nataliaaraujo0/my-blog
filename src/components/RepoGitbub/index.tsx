import React from "react"
import { RepoTag } from "../RepoTag"

import * as S from "./styled"

export interface RepoProps {
  slug?: string
  img?: string
  title: string
  description: string
}

export const RepoGithub = ({
  slug,
  img,
  title = "titlo",
  description = "descricao",
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
            <RepoTag />
          </S.RepoTagList>
        </S.ContentInfoWrapper>
      </S.RepoItemWrapper>
    </S.RepoLink>
  )
}
