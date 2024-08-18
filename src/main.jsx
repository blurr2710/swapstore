import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const styles = {
	global: (props) => ({
		body: {
			fontFamily: "Menlo", // Default font family for the body
		},
	}),
};

// Define custom font family settings
const fonts = {
	body: "Arial, sans-serif",       // Default font for the body
	heading: "Georgia, serif",       // Font for headings
	mono: "Menlo, monospace",        // Font for monospaced text
  };
  

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, styles, fonts});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);