import * as React from "react"
import { Layout } from "../components/Layout"
import { RepoGithub } from "../components/RepoGitbub"
import { Seo } from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="repositories" />
    <RepoGithub
      tags={[
        {
          id: 1,
          titleTag: "ReactJS",
          bgTag: "#55aaff",
        },
      ]}
    />
  </Layout>
)

export default AboutPage
