import { Link } from "gatsby"
import styled from "styled-components"

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #fff;
`
export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`
export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  color: #a46bd1;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4rem;
`
export const ProfileLink = styled(Link)`
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #9384d1;
  }
`
