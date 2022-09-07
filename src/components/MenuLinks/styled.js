import { Link } from "gatsby"
import styled from "styled-components"

export const MenuLinksWrapper = styled.nav``
export const MenuLinksList = styled.ul`
  font-size: 1rem;
  font-weight: 300;
`
export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #ffae11;
    font-weight: bold;
  }
`
export const MenuLinksLink = styled(Link)`
  color: #9384d1;
  transition: color 0.5s;
  text-decoration: none;

  &:hover {
    color: #ea9d08;
  }
`
