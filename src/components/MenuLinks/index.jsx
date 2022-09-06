import React from 'react'
import * as S from './styled'
import links from './content'
export const MenuLinks = () => {
	return (
		<S.MenuLinksWrapper>
			<S.MenuLinksList>
				{links?.map((link, i) => (
					<S.MenuLinksItem
						key={i}
					>
						<S.MenuLinksLink to={link.url} activeClassName='active'>
							{link.label}
						</S.MenuLinksLink>

					</S.MenuLinksItem>
				))}
			</S.MenuLinksList>
		</S.MenuLinksWrapper>
	)
}