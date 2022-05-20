import './Home.scss'
import Grid from '../components/Grid'

const Home = ({ data }) => {

	return (
		<section className='home-container' >
			<Grid data={data} />
		</section>
	)
}

export default Home;