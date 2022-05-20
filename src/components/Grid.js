import './Grid.scss'
import Card from './Card'

const Grid = ({ data }) => {

	const cards = data.photos.photo.map((element, index) => {
		return <Card key={index + 1} element={element} />
	})

	console.log(data)

	// data.photos.photo.forEach(element => {})

	return (
		<section className='grid-container'>
			{cards}
		</section>
	)
}

export default Grid;