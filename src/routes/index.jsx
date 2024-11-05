import React from 'react';
const AuthLayout = React.lazy(() => import("../layouts/authLayout"));
const MainLayout = React.lazy(() => import("../layouts/mainLayout"));
const HomePage = React.lazy(() => import("../pages/homePage"));
const Login = React.lazy(() => import("../pages/login"));

const routes = [
	{
		path: "/",
		component: HomePage,
		title: "Home Page",
		private: true,
		// layoutComponent: MainLayout,
	},
	{
		path: "/login",
		component: Login,
		title: "Login Page",
		private: false,
		layoutComponent: AuthLayout,
	},
];

export default routes;
