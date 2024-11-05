import React, { useEffect, Suspense } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./utils/privateRoutes";
import NotFound from "./pages/notFound";

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
			<Suspense fallback={<div>Loading...</div>}>
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
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default AppContainer;
