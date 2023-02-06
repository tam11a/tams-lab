import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";

const WebsiteFooter: React.FC = () => {
	return (
		<AppBar
			className="shadow-none relative bg-transparent rounded-t-2xl p-4"
			sx={{ backgroundImage: "none" }}
		>
			<Toolbar
				sx={{ bgcolor: "background.paper" }}
				className="rounded-t-2xl"
			>
				<Container className="flex flex-row items-center justify-between  max-w-[1760px]"></Container>
			</Toolbar>
		</AppBar>
	);
};

export default WebsiteFooter;
