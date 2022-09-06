import React from 'react'

import * as S from './styled'

export const RepoGithub = ({ slug, img, title, description, bgTag, titleTag }) => {
	return (
		<S.RepoLink to={slug}>
			<S.RepoItemWrapper>
				<S.RepoImage>
					<h1>{img}</h1>
				</S.RepoImage>

				<S.ContentInfoWrapper>
					<h1>{title}</h1>
					<description>{description}</description>
					<S.RepoTagList>
						<S.RepoTag background={bgTag}>{titleTag}</S.RepoTag>

					</S.RepoTagList>
				</S.ContentInfoWrapper>

			</S.RepoItemWrapper>
		</S.RepoLink>
	)
}
