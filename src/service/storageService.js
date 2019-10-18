import { getCreatedAt } from '../helpers/notesHelper'

export function saveNotesToLocalStorage (notes) {
  window.localStorage.setItem('notes', JSON.stringify(notes))
}

export function getNotes () {
  const notes = window.localStorage.getItem('notes')
  return JSON.parse(notes) || [{ title: '', text: '', isPin: false, createdOn: getCreatedAt() }]
}
