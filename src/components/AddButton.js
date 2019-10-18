import { addNote, buttonWrapper } from '../styles/NotesStyle'
/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function SingleNote (props) {
  return (
    <div css={buttonWrapper}>
      <button css={addNote} onClick={() => props.addNote()}>
         +
      </button>
    </div>
  )
}
