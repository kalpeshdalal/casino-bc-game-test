import React from "react";

const NotFound = () => {
	return (
		<div className="h-[100vh] w-full flex justify-center flex-col items-center">
			<div>
				<div className="text-40 font-bold">404 - Not Found</div>
				<div className="text-whiteClr-60 text-20">
					The page you're looking for doesn't exist.
				</div>
			</div>
		</div>
	);
};

export default NotFound;
