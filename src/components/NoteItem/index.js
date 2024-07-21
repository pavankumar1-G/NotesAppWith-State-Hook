// Write your code here
import {EachNote, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {note, title} = noteDetails

  return (
    <EachNote>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </EachNote>
  )
}
export default NoteItem
