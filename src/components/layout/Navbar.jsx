import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Searchbar from "./Searchbar";

const Navbar = () => (
	<Stack
		direction="row"
		alignItems="center"
		p=""
		sx={{
			position: "sticky",
			top: 0,
			justifyContent: "space-between",
		}}
	>
		<Link to="/" style={{ display: "flex", alignItems: "center" }}>
			<img src={logo} alt="logo" height="45" style={{ padding: "10px" }} />
		</Link>
		<Searchbar />
	</Stack>
);

export default Navbar;
