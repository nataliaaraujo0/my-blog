import styled from "styled-components"

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  min-width: 72px;
  width: 100px;
  max-width: auto;
  height: 26px;
  border-radius: 4px;
  background: ${props => (props.background ? props.background : "#110adc")};
  color: #fff;

  h1 {
    font-size: 1rem;
  }
`
