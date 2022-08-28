import * as React from "react"
import PropTypes from "prop-types"
import { Profile } from "./Profile"

export const Layout = ({ children }) => (
  <>
    <aside>
      <Profile />
    </aside>
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
