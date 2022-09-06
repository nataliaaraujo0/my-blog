import { Link } from "gatsby"
import styled from "styled-components"

export const MenuLinksWrapper = styled.nav``
export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`
export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: pink;
  }
`
export const MenuLinksLink = styled(Link)`
  color: blue;
  transition: color 0.5s;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`
