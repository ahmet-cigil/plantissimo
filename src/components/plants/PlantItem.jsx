import { Link } from "react-router-dom";

const PlantItem = ({ plant }) => {
	const key = process.env.REACT_APP_PERENUAL_KEY;
	return (
		<div key={plant.id}>
			<Link to={`/plants/${plant.id}?key=${key}`}>
				<h3>{plant.common_name}</h3>
			</Link>
			<p>Scientific Name: {plant.scientific_name.join(", ")}</p>
			<p>Cycle: {plant.cycle}</p>
			<p>Watering: {plant.watering}</p>
			{plant.default_image && plant.default_image.thumbnail && (
				<img src={plant.default_image.thumbnail} alt={plant.common_name} />
			)}
		</div>
	);
};

export default PlantItem;
