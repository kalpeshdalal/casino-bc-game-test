import React from "react";

const AuthLayout = ({ children }) => {
	return (
		<div className="auth-layout">
			<header>Auth Header</header>
			<main>{children}</main>
		</div>
	);
};

export default AuthLayout;
