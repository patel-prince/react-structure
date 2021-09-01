import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PageSpinner from "./components/PageSpinner/PageSpinner";
import useStore from "./store";
import AppRouter from "./utils/AppRouter";

const App: React.FC = observer(() => {
	const { AUTH } = useStore();
	const { InitializeApp, app_loading } = AUTH;

	useEffect(() => {
		InitializeApp();
	}, []);
	return (
		<BrowserRouter>
			{app_loading ? <PageSpinner /> : <AppRouter />}
		</BrowserRouter>
	);
});

export default App;
