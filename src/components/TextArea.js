import {
  textAreaStyle, text } from '../styles/NotesStyle'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export default function TextArea (props) {
  return (
    <textarea placeholder='Enter Text...'
      css={css`{${text} ${textAreaStyle} ${props.textAreaStyle}}`}
      name='text'
      value={props.value}
      onBlur={props.onBlur}
      onChange={(input) => props.setText({ id: props.id, text: input.target.value || '' })} />
  )
}
