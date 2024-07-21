// Write your code here
import {useState} from 'react'
import {v4 as id} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesAppContainer,
  NotesHeading,
  NotesInputContainer,
  TitleInput,
  NoteTextarea,
  NoteAddButton,
  NotesEmptyContainer,
  EmptyImageIcon,
  EmptyHeading,
  EmptyNote,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])

  const onChangeTitleInput = event => {
    setTitle(event.target.value)
  }
  const onChangeNoteInput = event => {
    setNote(event.target.value)
  }

  const onSubmitAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: id(),
      title,
      note,
    }
    setNoteList(prevState => [...prevState, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <NotesAppContainer>
      <NotesHeading>Notes</NotesHeading>
      <form onSubmit={onSubmitAddNote}>
        <NotesInputContainer>
          <TitleInput
            type="text"
            value={title}
            onChange={onChangeTitleInput}
            placeholder="Title"
          />
          <NoteTextarea
            type="text"
            value={note}
            onChange={onChangeNoteInput}
            placeholder="Take a Note..."
            rows="5"
          />
          <NoteAddButton type="submit">Add</NoteAddButton>
        </NotesInputContainer>
      </form>
      {noteList.length < 1 ? (
        <NotesEmptyContainer>
          <EmptyImageIcon
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyNote>Notes you add will appear here</EmptyNote>
        </NotesEmptyContainer>
      ) : (
        <NotesList>
          {noteList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      )}
    </NotesAppContainer>
  )
}
export default Notes
