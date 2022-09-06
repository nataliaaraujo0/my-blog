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
    color: #ffae11;
  }
`
export const MenuLinksLink = styled(Link)`
  color: #fff;
  transition: color 0.5s;
  text-decoration: none;

  &:hover {
    color: #ea9d08;
  }
`
