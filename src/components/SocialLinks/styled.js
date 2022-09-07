import styled from "styled-components"
export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`
export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 8px;
`
export const SocialLinksItem = styled.li``
export const SocialLinksLink = styled.a`
  color: #8a2be2;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #c060fc;
  }
`
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
