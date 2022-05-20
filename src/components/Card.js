import './Card.scss'

const Card = ({ element }) => {
	
	return (
		<div className='card-container'>
				<img src={`http://farm${element.farm}.static.flickr.com/${element.server}/${element.id}_${element.secret}.jpg`} />
			</div>
	)

}

export default Card;