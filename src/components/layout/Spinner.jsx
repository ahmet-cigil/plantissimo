import spinner from "./assets/spinner.gif";

function Spinner() {
	return (
		<div>
			<img
				src={spinner}
				className="text-center mx-auto"
				width="180"
				alt="Loading... "
			/>
		</div>
	);
}

export default Spinner;
