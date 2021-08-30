import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useStore from "./store";
import AppRouter from "./utils/AppRouter";

const App: React.FC = () => {
	const { AUTH } = useStore();
	const { InitializeApp } = AUTH;

	useEffect(() => {
		InitializeApp();
	}, []);
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
};

export default App;
