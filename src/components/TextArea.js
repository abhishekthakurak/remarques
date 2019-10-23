import React from 'react'
import {
  textAreaStyle,
  text
} from '../styles/NotesStyle'

export default function TextArea (props) {
  return (
    <textarea placeholder='Enter Text...'
      css={[text, textAreaStyle, props.textAreaStyle]}
      name='text'
      value={props.value}
      onBlur={props.onBlur}
      onChange={(input) => props.setText({ id: props.id, text: input.target.value || '' })} />
  )
}
