import React from "react";

const MainLayout = ({ children }) => {
	return (
		<div>
			<header>Main Header</header>
			<div className="main-layout">
				<aside>Sidebar</aside>
				<main>{children}</main>
			</div>
		</div>
	);
};

export default MainLayout;
