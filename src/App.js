import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, FeedDetail, SearchFeed } from "./components";

const App = () => (
	<Router>
		<Box>
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Feed />} />
				<Route path="/feed-detail/:id" exact element={<FeedDetail />} />
				<Route path="/search-feed/:searchTerm" exact element={<SearchFeed />} />
			</Routes>
		</Box>
	</Router>
);

export default App;
