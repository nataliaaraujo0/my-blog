import * as React from "react"
import PropTypes from "prop-types"
import { Profile } from "../Profile"
import { LayoutMain, LayoutWrapper } from "./style"
import { GlobalStyle } from "../../styles/global"

export const Layout = ({ children }) => (

  <LayoutWrapper>
    <GlobalStyle />
    <aside>
      <Profile />
    </aside>
    <LayoutMain>{children}</LayoutMain>
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}