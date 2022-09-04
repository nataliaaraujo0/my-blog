import styled from "styled-components"
export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`
export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`
export const SocialLinksItem = styled.li``
export const SocialLinksLink = styled.a`
  color: yellow;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: green;
  }
`
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
