import styled from "styled-components"
import { Link } from "gatsby"

export const RepoLink = styled(Link)`
  display: flex;
  height: 124px;
  gap: 2rem;
`

export const RepoItemWrapper = styled.div`
  display: flex;
  height: 124px;
  gap: 2rem;
  justify-content: center;
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

  > strong {
    color: #fff;
    margin-bottom: 0.5rem;
  }
  > p {
    color: #c8d4fa;
    font-size: 14px;
    margin-bottom: 0.2rem;
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
  background: blue;
`
