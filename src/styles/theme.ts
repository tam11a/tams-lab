import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "#0d1116",
			paper: "#161b22",
		},
	},
	typography: {
		fontFamily: "Lato, sans-serif",
	},
});

export default theme;
