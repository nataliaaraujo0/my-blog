import React from 'react'
import { MenuLinks } from '../MenuLinks'
import { Profile } from '../Profile'
import { SocialLinks } from '../SocialLinks'


import * as S from './styled'

export const Sidebar = () => {
	return (
		<S.SidebarWrapper>
			<Profile />
			<SocialLinks />
			<MenuLinks />
		</S.SidebarWrapper>
	)


}