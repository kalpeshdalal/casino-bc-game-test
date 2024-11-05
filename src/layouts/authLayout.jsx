import React from "react";
import AuthHeader from "../pages/authHeader";
import AuthFooter from "../pages/authFooter";

const AuthLayout = ({ children }) => {
	return (
		<div style={{minHeight:'100vh', display:"flex", justifyContent:'space-between', flexDirection:'column'}}>
			<header className="h-[253px] "><AuthHeader/></header>
			<main>{children}</main>
			<footer className="" style={{padding:'16px 0'}}><AuthFooter/></footer>
		</div>
	);
};

export default AuthLayout;
