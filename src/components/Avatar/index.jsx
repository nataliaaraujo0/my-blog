import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

export const Avatar = () => {
	const { avatarImage, iconGithub, iconLinkedin } = useStaticQuery(
		graphql`
		query {
			avatarImage: file(relativePath: {eq: "avatar.png"}) {
				childImageSharp {
					fixed(width:60, height:60) {
						...GatsbyImageSharpFixed_tracedSVG

					}
				}
			},
			iconGithub: file(relativePath: {eq: "linkedin-icon.png"}) {
				childImageSharp {
					fixed(width:25, height:25) {
						...GatsbyImageSharpFixed_tracedSVG

					}
				}
			},
			iconLinkedin: file(relativePath: {eq: "github-icon.png"}) {
				childImageSharp {
					fixed(width:25, height:25) {
						...GatsbyImageSharpFixed_tracedSVG

					}
				}
			}
		}
	`
	)
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px' }}>
			<Img fixed={avatarImage.childImageSharp.fixed} />
			<div style={{ marginTop: '20px' }}>
				<Img fixed={iconLinkedin.childImageSharp.fixed} />
				<Img fixed={iconGithub.childImageSharp.fixed} />
			</div>
		</div>
	)
}