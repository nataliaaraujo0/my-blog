import React from 'react'
import * as S from './styled'

import { Grid1x2Fill as Grid } from "@styled-icons/bootstrap/Grid1x2Fill"
import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-solid/UpArrowAlt"
import { Lightbulb as Light } from "@styled-icons/bootstrap/Lightbulb"

export const MenuBar = () => {
	return (
		<S.MenuBarWrapper>
			<S.MenuBarGroup>
				<S.MenuBarLink to="/" title="Voltar para Home">
					<S.MenuBarItem>
						<Home />
					</S.MenuBarItem>
				</S.MenuBarLink>
				<S.MenuBarLink to="/search/" title="Pesquisar">
					<S.MenuBarItem>
						<Search />
					</S.MenuBarItem>
				</S.MenuBarLink>
			</S.MenuBarGroup>
			<S.MenuBarGroup>
				<S.MenuBarItem title="Mudar o tema">
					<Light />
				</S.MenuBarItem>
				<S.MenuBarItem title="Mudar visualização">
					<Grid />
				</S.MenuBarItem>
				<S.MenuBarItem title="Ir para o Topo">
					<Arrow />
				</S.MenuBarItem>
			</S.MenuBarGroup>
		</S.MenuBarWrapper>
	)
}