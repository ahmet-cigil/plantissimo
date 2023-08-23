import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => (
	<Paper
		component="form"
		onSubmit={() => {}}
		sx={{
			borderRadius: 20,
			border: "1px solid #e3e3e3",
			pl: 2,
			boxShadow: "none",
			mr: { sm: 5 },
		}}
	>
		<input
			className="search-bar"
			placeholder="Search..."
			value=""
			onChange={() => {}}
		/>
		<IconButton type="submit" sx={{ p: "10px", color: "lightgreen" }}>
			<SearchIcon />
		</IconButton>
	</Paper>
);

export default Searchbar;
