import * as React from "react"
import PropTypes from "prop-types"
import { Profile } from "../Profile"
import { GlobalStyle } from "../../styles/global"
import * as S from './styled'
export const Layout = ({ children }) => (

  <S.LayoutWrapper>
    <GlobalStyle />
    <aside>
      <Profile />
    </aside>
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
