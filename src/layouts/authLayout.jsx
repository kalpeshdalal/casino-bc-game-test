import React from "react";
import AuthHeader from "../pages/authHeader";
import AuthFooter from "../pages/authFooter";

const AuthLayout = ({ children }) => {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "column",
				gap: "24px",
			}}
		>
			<div className="h-[253px] ">
				<AuthHeader />
				<main>{children}</main>
			</div>

			<footer className="" style={{ padding: "16px 0 24px  0" }}>
				<AuthFooter />
			</footer>
		</div>
	);
};

export default AuthLayout;
