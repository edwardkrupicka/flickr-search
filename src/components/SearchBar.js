import './SearchBar.scss'
import React, { useState } from 'react';

const SearchBar = ({ data, currentSearch, setSearch, setMessage }) => {

	const[searchInput, setSearchInput] = useState('')

	const handleClick = (e) => {
		e.preventDefault()
		setSearch(searchInput)
		if(data.stat === 'ok' && !data.photos.photo.length || data.stat === 'fail') {
			setMessage('No Results')
		}
	}
	 
	return (
		<form className='search-container'>
			<label htmlFor="search" />
			<input
            className='search-bar'
            type="text"
            id="header-search"
            placeholder="Search..."
						onChange={(e) => setSearchInput(e.target.value) }
            autoComplete="off"
        />
				<button className='submit' onClick={(e) => handleClick(e)} >Search</button>
		</form>
	)
}

export default SearchBar;