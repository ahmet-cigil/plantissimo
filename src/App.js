import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer.jsx";
import Feed from "./pages/Feed.jsx";
import FeedDetail from "./pages/FeedDetail.jsx";
import SearchFeed from "./pages/SearchFeed";
import { PerenualProvider } from "./context/perenual/PerenualContext";
import "./App.css";

const App = () => (
	<PerenualProvider>
		<Router>
			<Box className="background-container">
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Feed />} />
					<Route path="/feed-detail/:id" exact element={<FeedDetail />} />
					<Route
						path="/search-feed/:searchTerm"
						exact
						element={<SearchFeed />}
					/>
				</Routes>
				<Footer />
			</Box>
		</Router>
	</PerenualProvider>
);

export default App;
