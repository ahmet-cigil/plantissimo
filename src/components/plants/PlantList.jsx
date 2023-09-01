import { useContext } from "react";
import Spinner from "../layout/Spinner";
import PlantItem from "./PlantItem";
import PerenualContext from "../../context/perenual/PerenualContext";

const PlantList = () => {
	const { plants, loading } = useContext(PerenualContext);

	if (!loading) {
		return (
			<div>
				{plants.map((plant) => (
					<PlantItem key={plant.id} plant={plant} />
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

export default PlantList;
