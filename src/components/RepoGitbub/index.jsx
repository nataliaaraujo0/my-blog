import React from 'react'

import * as S from './styled'

export const RepoGithub = () => {
	return (
		<S.RepoLink to='/slug/'>
			<S.RepoItemWrapper>
				<S.RepoImage>
					<h1>img</h1>
				</S.RepoImage>

				<S.ContentInfoWrapper>
					<h1>Name project</h1>
					<p>22 de agosto de 2022 min de leitura</p>
					<description>This project consists of showing my portfolio</description>
					<S.RepoTagList>
						<S.RepoTag background='#de27bc'>react</S.RepoTag>
						<S.RepoTag background='#105310'>typet</S.RepoTag>
						<S.RepoTag >sem bg</S.RepoTag>


					</S.RepoTagList>
				</S.ContentInfoWrapper>

			</S.RepoItemWrapper>
		</S.RepoLink>
	)
}
