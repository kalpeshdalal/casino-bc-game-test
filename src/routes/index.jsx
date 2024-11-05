import AuthLayout from "../layouts/authLayout";
import MainLayout from "../layouts/mainLayout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const routes = [
	{
		path: "/dashboard",
		component: Dashboard,
		title: "Dashboard",
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
];

export default routes;
