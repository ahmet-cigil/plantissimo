import React from "react";
import Typography from "@mui/material/Typography";

const Footer = () => {
	const containerStyles = {
		display: "flex",
		flexDirection: "column",
	};

	const footerStyles = {
		marginTop: "auto",
		textAlign: "center",
		padding: "10px",
		backgroundColor: "#f0f0f0",
	};

	return (
		<div style={containerStyles}>
			<div style={footerStyles}>
				<Typography variant="body2">
					Copyright &copy; 2023 Plantissimo by Ahmet Cigil
				</Typography>
			</div>
		</div>
	);
};

export default Footer;
