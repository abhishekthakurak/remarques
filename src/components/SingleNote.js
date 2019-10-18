import deleteIcon from '../images/delete.svg'
import pinImage from '../images/pin.svg'
import expandImage from '../images/expand.svg'
import { minimizeTextArea,
  note, pinned, expand, date, pin, remove, title, margin, paper, swing, tooltip } from '../styles/NotesStyle'
import { useRef, useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import TextArea from './TextArea'

export default function SingleNote (props) {
  const noteRef = useRef(null)

  useEffect(() => {
    !props.searchFocus && noteRef.current.focus()
  }, [])

  return (
    <div css={css`${note} ${props.note.isPin && pinned}`}>
      <form css={paper} method='get' action=''>
        <div css={margin}>Title: <input
          ref={noteRef}
          css={title}
          type='text'
          name='title'
          value={props.note.title}
          onChange={(input) => props.setNote({ id: props.id, title: input.target.value || '' })} /></div>
        <img css={remove} alt='remove' src={deleteIcon} onClick={() => props.removeNote(props.id)} />
        <img css={pin} alt='pin' src={pinImage} onClick={() => props.pinNote(props.id)} />
        <img css={expand} alt='pin' src={expandImage} onClick={() => props.setFullView(props.id)} />

        <div css={css`${tooltip} ${swing}`} data-title='Created On' >
          <div css={date}>{props.note.createdOn}</div>
        </div>

        <TextArea placeholder='Enter Text...'
          id={props.id}
          textAreaStyle={minimizeTextArea}
          value={props.note.text}
          onBlur={props.saveNotesToLocalStorage}
          setText={props.setNote} />
      </form>
    </div>
  )
}
