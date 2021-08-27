import React from "react";
import { Route, Switch } from "react-router-dom";
import RouterConfig from "../config/RouterConfig";
import LayoutView from "../views/layouts";

const AppRouter: React.FC = () => {
	return (
		<Switch>
			{RouterConfig.map(({ exact, path, component, settings, auth }, index) => {
				return (
					<Route key={index} exact={exact !== false} path={path}>
						<LayoutView
							component={component}
							settings={settings}
							isAuthenticationRequired={auth}
						/>
					</Route>
				);
			})}
		</Switch>
	);
};

export default AppRouter;
