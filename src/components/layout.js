import * as React from "react"
import PropTypes from "prop-types"

export const Layout = ({ children }) => {
  return <main>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
