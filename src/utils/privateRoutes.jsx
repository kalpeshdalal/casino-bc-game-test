import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, layout: Layout }) => {
	const isAuthenticated = !!localStorage.getItem("accessToken");

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return Layout ? (
		<Layout>
			<Component />
		</Layout>
	) : (
		<Component />
	);
};

export default PrivateRoute;
