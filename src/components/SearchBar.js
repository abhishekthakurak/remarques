import React from 'react'
import { searchBar, input, searchRemove, searchBarWrapper } from '../styles/NotesStyle'
import remove from '../images/remove.svg'

export default function SingleNote (props) {
  return (
    <div css={searchBar}>
      <div css={searchBarWrapper}>
        <input
          css={input}
          placeholder='Search Note...'
          value={props.searchText}
          onChange={input => props.onSearchTextChange(input.target.value)}
          onFocus={() => props.toggleSearchFocus(true)}
          onBlur={() => props.toggleSearchFocus(false)} />
        <img css={searchRemove} alt='remove search text' src={remove} onClick={() => props.onSearchTextChange('')
        } />
      </div>
    </div>
  )
}
