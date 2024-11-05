import React from "react";
import AuthHeader from "../pages/authHeader";
import AuthFooter from "../pages/authFooter";

const AuthLayout = ({ children }) => {
	return (
		<div style={{height:"100vh", position:"relative"}}>
			<header className="h-[273px] "><AuthHeader/></header>
			<main>{children}</main>
			<footer className="w-full" style={{position:"absolute" , bottom:"0px"}}><AuthFooter/></footer>
		</div>
	);
};

export default AuthLayout;
