import { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";
import PlantItem from "./PlantItem";

const PlantList = () => {
	const [plants, setPlants] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPlants();
	}, []);

	const fetchPlants = async () => {
		try {
			const apiKey = process.env.REACT_APP_PERENUAL_KEY;
			const response = await fetch(
				`${process.env.REACT_APP_PERENUAL_URL}/api/species-list?page=1&key=${apiKey}`
			);
			const data = await response.json();
			setPlants(data.data);
			setLoading(false);
		} catch (error) {
			console.error("Error during fetch:", error);
			setLoading(false);
		}
	};

	if (loading) {
		return <Spinner />;
	}
	if (!loading) {
		return (
			<div>
				{plants.map((plant) => (
					<PlantItem key={plant.id} plant={plant} />
				))}
			</div>
		);
	}
};

export default PlantList;
