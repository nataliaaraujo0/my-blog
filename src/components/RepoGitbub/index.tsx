import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { RepoTag } from "../RepoTag"
import { RepoProps } from "./interface"

import * as S from "./styled"

export const RepoGithub = ({
  slug,
  title = "titlo",
  description = "descricao",
  tags = [],
}: RepoProps) => {
  const { imgRepo } = useStaticQuery(
    graphql`
      query {
        imgRepo: file(relativePath: { eq: "imgRepo.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <S.RepoLink to={slug}>
      <S.RepoItemWrapper>
        <S.RepoImage>
          <Img fixed={imgRepo.childImageSharp.fixed} />
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
