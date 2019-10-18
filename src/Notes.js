import { useReducer, useEffect } from 'react'
import SingleNote from './components/SingleNote'
import { mainWrapper, noteList, textAreaWrapper, maximizeTextArea, blurMainWrapper, closeFullView } from './styles/NotesStyle'
import SearchBar from './components/SearchBar'
import AddButton from './components/AddButton'
import { getNotes, saveNotesToLocalStorage } from './service/storageService'
import { getCreatedAt } from './helpers/notesHelper'
import TextArea from './components/TextArea'
import remove from './images/remove.svg'

/** @jsx jsx */
import { jsx } from '@emotion/core'

const initialState = { notes: getNotes(), searchText: '', searchFocus: '', fullViewIndex: null }

function reducer (state, action) {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.payload }
    case 'SET_SEARCH_TEXT':
      return { ...state, searchText: action.payload }
    case 'SET_SEARCH_FOCUS' :
      return { ...state, searchFocus: action.payload }
    case 'SET_FULL_VIEW':
      return { ...state, fullViewIndex: action.payload }
    case 'SET_STATE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default function App () {
  console.log('0000')
  const [state, dispatch] = useReducer(reducer, initialState)
  const { notes, searchText, searchFocus, fullViewIndex } = state

  useEffect(() => {
    saveNotesToLocalStorage(notes)
  }, [notes])

  function addNote () {
    const cloneNotes = [...notes, {
      title: '',
      text: '',
      isPin: false,
      createdOn: getCreatedAt()
    }]
    dispatch({
      type: 'SET_STATE',
      payload: {
        notes: cloneNotes,
        searchText: ''
      }
    })
  }

  function setNote ({ id, text, title }) {
    const cloneNotes = [...notes]
    if (text !== undefined) {
      cloneNotes[id].text = text
    }
    if (title !== undefined) {
      cloneNotes[id].title = title
    }
    dispatch({
      type: 'SET_NOTES',
      payload: cloneNotes
    })
  }

  function removeNote (id) {
    const cloneNotes = [...notes]
    const notesAfterDeletion = cloneNotes.filter((note, index) => index !== id)
    dispatch({
      type: 'SET_NOTES',
      payload: notesAfterDeletion
    })
  }

  function pinNote (id) {
    const cloneNotes = [...notes]
    cloneNotes[id].isPin = !cloneNotes[id].isPin
    dispatch({
      type: 'SET_NOTES',
      payload: cloneNotes
    })
  }

  function getNotesList () {
    return notes.filter(note => note.title.toLowerCase().includes(searchText.toLowerCase()) || note.text.includes(searchText))
  }

  function onSearchTextChange (searchText) {
    dispatch({ type: 'SET_SEARCH_TEXT', payload: searchText })
  }

  function toggleSearchFocus (searchFocus) {
    dispatch({ type: 'SET_SEARCH_FOCUS', payload: searchFocus })
  }

  function setFullView (index) {
    dispatch({
      type: 'SET_FULL_VIEW',
      payload: index
    })
  }

  return (
    <div css={mainWrapper}>
      <div css={fullViewIndex ? blurMainWrapper : ''}>
        <SearchBar onSearchTextChange={onSearchTextChange} toggleSearchFocus={toggleSearchFocus} />
        <div css={noteList}>
          {getNotesList().map((note, index) => <SingleNote key={index}
            searchFocus={searchFocus}
            id={index}
            note={note}
            setNote={setNote}
            removeNote={removeNote}
            saveNotesToLocalStorage={() => saveNotesToLocalStorage(notes)}
            pinNote={pinNote}
            setFullView={setFullView} />)}
          <AddButton addNote={addNote} />
        </div>
      </div>
      {(fullViewIndex || fullViewIndex === 0) &&
      <div css={textAreaWrapper}>
        <div>
          <img css={closeFullView} alt='remove search text' src={remove} onClick={() => setFullView(null)} />
          <TextArea placeholder='Enter Text...'
            id={fullViewIndex}
            textAreaStyle={maximizeTextArea}
            value={notes[fullViewIndex].text}
            onBlur={() => saveNotesToLocalStorage(notes)}
            setText={setNote} />
        </div>
      </div>}
    </div>
  )
}
