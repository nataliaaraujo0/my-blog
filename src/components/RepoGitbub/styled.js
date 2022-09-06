import styled from "styled-components"
import { Link } from "gatsby"

export const RepoLink = styled(Link)`
  display: flex;
  text-decoration: none;

  &:hover {
    color: #1fa1f2;
  }
`

export const RepoItemWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  gap: 1rem;
`

export const RepoImage = styled.div`
  width: 132px;
  height: 124px;
  border-radius: 4px;
  background: blueviolet;
`

export const ContentInfoWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  background: transparent;
  width: 80%;

  > h1 {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  > p {
    color: #6f8ff4;
  }
`

export const RepoTagList = styled.div`
  display: flex;
  gap: 1rem;
`
export const RepoTag = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 72px;
  width: 100px;
  max-width: auto;
  height: 26px;
  border-radius: 4px;
  background: ${props => (props.background ? props.background : "#110adc")};
  color: #fff;
`
