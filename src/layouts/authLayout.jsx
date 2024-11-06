import React from "react";

import { useLocation } from "react-router-dom";
import AuthHeader from "../components/layoutComponents/authHeader";
import AuthFooter from "../components/layoutComponents/authFooter";

const AuthLayout = ({ children }) => {
	let location = useLocation();

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

			{location?.pathname !== '/forgot-password' ?
				<footer className="" style={{ padding: "16px 0 24px  0" }}>
					<AuthFooter />
				</footer>
				:
				""
			}
		</div>
	);
};

export default AuthLayout;
