import React from 'react'
import { addNote, buttonWrapper } from '../styles/NotesStyle'

export default function SingleNote (props) {
  return (
    <div css={buttonWrapper}>
      <button css={addNote} onClick={() => props.addNote()}>
         +
      </button>
    </div>
  )
}
