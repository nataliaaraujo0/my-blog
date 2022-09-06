import React from 'react'

import * as S from './styled'

export const RepoGithub = () => {
	return (
		<S.RepoLink>
			<S.RepoItemWrapper>
				<S.RepoImage>
					<h1>img</h1>
				</S.RepoImage>
				<S.ContentInfoWrapper>

					<strong>Name project</strong>
					<p>22 de agosto de 2022 min de leitura</p>
					<description>This project consists of showing my portfolio</description>

					<S.RepoTagList>
						<S.RepoTag>react</S.RepoTag>
						<S.RepoTag>ts</S.RepoTag>
						<S.RepoTag>tadasds</S.RepoTag>
					</S.RepoTagList>



				</S.ContentInfoWrapper>

			</S.RepoItemWrapper>
		</S.RepoLink>
	)
}
