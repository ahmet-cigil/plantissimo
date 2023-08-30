import { Box, Stack, Typography } from "@mui/material";
import PlantList from "../components/plants/PlantList";

const Feed = () => {
	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box p="2" sx={{ height: "100vh", flex: "2" }}>
				<Typography
					variant="h4"
					fontWeight="bold"
					mb="2"
					sx={{
						color: "orange",
						display: "flex",
						justifyContent: "center",
						alignItems: "flex-start",
						minHeight: "100vh",
						padding: "75px",
					}}
				>
					Find Your Favorite Indoor or Garden Plant!
				</Typography>
				<PlantList />
			</Box>
		</Stack>
	);
};

export default Feed;
