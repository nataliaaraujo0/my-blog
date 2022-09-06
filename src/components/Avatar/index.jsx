import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import * as S from './styled'

export const Avatar = () => {
	const { avatarImage } = useStaticQuery(
		graphql`
		query {
			avatarImage: file(relativePath: {eq: "avatar.png"}) {
				childImageSharp {
					fixed(width:60, height:60) {
						...GatsbyImageSharpFixed_tracedSVG

					}
				}
			}
			
		}
	`
	)
	return (
		<S.AvatarWrapper >
			<Img fixed={avatarImage.childImageSharp.fixed} />

		</S.AvatarWrapper  >
	)
}