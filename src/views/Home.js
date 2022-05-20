import './Home.scss'
import Grid from '../components/Grid'
import SearchBar from '../components/SearchBar'
import React, { useState, useEffect } from 'react';


const Home = ({ data, currentSearch, setSearch, message, setMessage }) => {

	return (
		<section className='home-container' >
			<SearchBar currentSearch={currentSearch} setSearch={setSearch} data={data} setMessage={setMessage} />
			{data.stat === 'ok' && data.photos.photo.length ? <Grid data={data} /> : <h1>{message}</h1>}
		</section>
	)
}

export default Home;