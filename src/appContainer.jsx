import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./utils/privateRoutes";

function AppContainer() {
	useEffect(() => {
		const currentRoute = routes.find(
			(route) => route.path === window.location.pathname
		);
		if (currentRoute) {
			document.title = currentRoute.title || "Default Title";
		}
	}, [window.location.pathname]);

	return (
		<Router>
			<Routes>
				{routes.map((route, index) => {
					return route.private ? (
						<Route
							key={index}
							path={route.path}
							element={
								<PrivateRoute
									component={route.component}
									layout={route.layoutComponent}
								/>
							}
						/>
					) : (
						<Route
							key={index}
							path={route.path}
							element={
								route.layoutComponent ? (
									<route.layoutComponent>
										<route.component />
									</route.layoutComponent>
								) : (
									<route.component />
								)
							}
						/>
					);
				})}

			</Routes>
		</Router>
	);
}

export default AppContainer;
