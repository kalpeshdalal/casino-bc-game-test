import React, { useEffect, useState } from "react";
import AppContainer from "./appContainer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [toastPosition, setToastPosition] = useState("top-right");

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		const handleMediaQueryChange = (e) => {
			if (e.matches) {
				setToastPosition("bottom-center");
			} else {
				setToastPosition("top-right");
			}
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<>
			<ToastContainer
				position={toastPosition}
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition={Slide}
			/>
			<AppContainer />
		</>
	);
}

export default App;
