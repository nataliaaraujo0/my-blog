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
  border-bottom: 1px solid #232256;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  gap: 1rem;
`

<<<<<<< HEAD
=======
export const RepoImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  background: blueviolet;

  img{
  width: 200px;
  height: 200px;
  }
`

>>>>>>> a8337048c63108a22b9511bb4fb50c924f9f7902
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

