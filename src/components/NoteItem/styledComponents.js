// Style your elements here
import styled from 'styled-components'

export const EachNote = styled.li`
  width: 280px;
  border: 1px solid #aab8c8;
  border-radius: 8px;
  margin-bottom: 10px;
  padding 10px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 230px;
  }
`
export const Title = styled.h1`
  color: #334155;
  font-size: 20px;
  font-weight: bold;
`
export const Note = styled.p`
  color: #475569;
  font-size: 15px;
`
