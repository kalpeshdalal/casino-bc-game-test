import React from "react";
import LOGO from "../assets/logo/bc-game-logo-sm.png";
import CurrencySelector from "../components/layoutComponents/currencySelector";
import { BsFillGiftFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import Footer from "../components/layoutComponents/footer";

const MainLayout = ({ children }) => {
	return (
		<>
			<header
				className="section-padding"
				style={{
					position: "absolute",
					top: 0,
					zIndex: 100,
					width: "100%",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "6px 0",
						alignItems: "center",
					}}
				>
					<img
						style={{ width: "32px", height: "39px" }}
						alt="logo"
						src={LOGO}
					/>
					<CurrencySelector />
					<div className="flex gap-2">
						<div
							style={{
								width: "38px",
								height: "38px",
								borderRadius: "8px",
								fontSize: "16px",
								backgroundColor: "rgba(255, 255, 255, 0.2)",
							}}
							className="flex justify-center items-center "
						>
							<BsFillGiftFill />
						</div>
						<div
							style={{
								width: "38px",
								height: "38px",
								borderRadius: "8px",
								fontSize: "18px",
								backgroundColor: "rgba(255, 255, 255, 0.2)",
							}}
							className="flex justify-center items-center "
						>
							<IoNotificationsSharp />
						</div>
					</div>
				</div>
			</header>
			{/* <aside>Sidebar</aside> */}
			<main>{children}</main>
			<footer
				style={{
					position: "fixed",
					bottom: 0,
					zIndex: 100,
					width: "100%",
				}}
			>
				<Footer/>
			</footer>
		</>
	);
};

export default MainLayout;
