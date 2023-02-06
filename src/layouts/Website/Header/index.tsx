import { AppBar, Avatar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WebsiteHeader: React.FC = () => {
	return (
		<AppBar
			className="shadow-none relative bg-transparent rounded-2xl p-4"
			sx={{ backgroundImage: "none" }}
		>
			<Toolbar
				sx={{ bgcolor: "background.paper" }}
				className="rounded-2xl shadow-xl"
			>
				<Container className="flex flex-row items-center justify-between max-w-[1760px]">
					<Avatar
						src="/favicon.png"
						variant="circular"
					/>
					<Link to={"/app"}>
						<Typography>Join Community!!</Typography>
					</Link>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default WebsiteHeader;
