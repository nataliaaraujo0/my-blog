import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Avatar } from "../Avatar"

export const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(
    graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `
  )
  return (
    <div className="profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <strong>{position}</strong>
      <p>{description}</p>
    </div>
  )
}
