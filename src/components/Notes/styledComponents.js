// Style your elements here
import styled from 'styled-components'

export const NotesAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  margin: 10px;
  box-shadow: 0px 4px 16px 0px #cbd5e1;
  padding: 10px;
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-size: 30px;
  font-family: Bree Serif;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 40px;
  }
`
export const NotesInputContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #aab8c8;
  height: 200px;
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 576px) {
    width: 530px;
  }
  @media screen and (min-width: 768px) {
    width: 720px;
    height: 250px;
  }
  @media screen and (min-width: 991px) {
    width: 940px;
    height: 350px;
  }
  @media screen and (min-width: 1200px) {
    width: 1150px;
    height: 450px;
  }
`
export const TitleInput = styled.input`
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 10px;
  color: #475569;
  font-weight: bold;
  border: none;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const NoteTextarea = styled.textarea`
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 10px;
  color: #475569;
  font-weight: bold;
  padding-top: 10px;
  border: none;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 991px) {
    width: 920px;
    height: 300px;
  }
  @media screen and (min-width: 1200px) {
    width: 1130px;
    height: 400px;
  }
`
export const NoteAddButton = styled.button`
  align-self: flex-end;
  height: 60px;
  width: 70px;
  background-color: #4c63b6;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 70px;
    font-size: 20px;
  }
  @media screen and (min-width: 991px) {
    width: 90px;
    height: 80px;
    font-size: 25px;
  }
  @media screen and (min-width: 1200px) {
    width: 100px;
    height: 90px;
    font-size: 25px;
  }
`
export const NotesEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`
export const EmptyImageIcon = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
  @media screen and (min-width: 991px) {
    width: 200px;
  }
  @media screen and (min-width: 1200px) {
    width: 250px;
  }
`
export const EmptyHeading = styled.h1`
  color: #334155;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 991px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
`
export const EmptyNote = styled.p`
  color: #475569;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 991px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`
export const NotesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`
