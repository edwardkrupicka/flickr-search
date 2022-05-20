import './Home.scss'
import Grid from '../components/Grid'
import SearchBar from '../components/SearchBar'

const Home = ({ data, currentSearch, setSearch }) => {

	console.log(data)

	return (
		<section className='home-container' >
			<SearchBar currentSearch={currentSearch} setSearch={setSearch} />
			{data.stat === 'ok' ? <Grid data={data} /> : <h1>please enter search parameter</h1>}
		</section>
	)
}

export default Home;