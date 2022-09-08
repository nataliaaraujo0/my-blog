import * as React from "react"
import { Layout } from "../components/Layout"
import { RepoGithub } from "../components/RepoGitbub"
import { Seo } from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const AboutPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query myRepos {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                tags {
                  titleTag
                  bgTag
                }
              }
            }
          }
        }
      }
    `
  )

  const reposList = allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="repositories" />
      {reposList.map(
        ({
          node: {
            frontmatter: {
              title,
              description,
              tags: { titleTag, bgTag },
            },
            fields: { slug },
          },
        }) => (
          <RepoGithub
            slug={slug}
            title={title}
            description={description}
            tags={[{ titleTag, bgTag }]}
          />
        )
      )}
    </Layout>
  )
}

export default AboutPage
