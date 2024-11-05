import React from 'react';
const AuthLayout = React.lazy(() => import("../layouts/authLayout"));
const MainLayout = React.lazy(() => import("../layouts/mainLayout"));
const HomePage = React.lazy(() => import("../pages/HomePage"));
const Login = React.lazy(() => import("../pages/login"));
const SignUp = React.lazy(() => import("../pages/signUp"));
const ForgotPassword = React.lazy(() => import("../pages/forgotPassword"));

const routes = [
	{
		path: "/",
		component: HomePage,
		title: "Home Page",
		private: true,
		layoutComponent: MainLayout,
	},
	{
		path: "/login",
		component: Login,
		title: "Login Page",
		private: false,
		layoutComponent: AuthLayout,
	},
	{
		path: "/sign-up",
		component: SignUp,
		title: "SignUp Page",
		private: false,
		layoutComponent: AuthLayout,
	},
	{
		path: "/forgot-password",
		component: ForgotPassword,
		title: "Forgot Password Page",
		private: false,
		layoutComponent: AuthLayout,
	},
];

export default routes;
