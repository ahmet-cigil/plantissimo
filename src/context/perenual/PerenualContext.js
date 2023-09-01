import { createContext, useReducer } from "react";
import perenualReducer from "./PerenualReducer";

const PerenualContext = createContext();

const PERENUAL_API_KEY = process.env.REACT_APP_PERENUAL_KEY;
const PERENUAL_URL = process.env.REACT_APP_PERENUAL_URL;

export const PerenualProvider = ({ children }) => {
	const initialState = {
		plants: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(perenualReducer, initialState);

	// Get initial data for testing purposes
	const fetchPlants = async () => {
		setLoading();

		const response = await fetch(
			`${PERENUAL_URL}/api/species-list?page=1&key=${PERENUAL_API_KEY}`
		);
		const data = await response.json();

		dispatch({
			type: "GET_PLANTS",
			payload: data.data,
		});
	};

	const setLoading = () => dispatch({ type: "SET_LOADING" });

	return (
		<PerenualContext.Provider
			value={{
				plants: state.plants,
				loading: state.loading,
				fetchPlants,
			}}
		>
			{children}
		</PerenualContext.Provider>
	);
};

export default PerenualContext;
// 9, Section 8
// User Search Component
