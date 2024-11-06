import React from "react";
import steam from "../../assets/icons/steam.svg";
import line from "../../assets/icons/line.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import waveIcon from "../../assets/icons/waveIcon.svg";
import metamask from "../../assets/icons/metamask.svg";
import telegram from "../../assets/icons/telegram.svg";
import google from "../../assets/icons/google.svg";

const AuthFooter = () => {
	const images = [
		google,
		telegram,
		metamask,
		waveIcon,
		whatsapp,
		line,
		steam,
	];
	return (
		<div className="section-padding">
			<div className="flex items-center mb-6 w-full">
				<div className="flex-grow border-t border-borderStrokeClr w-full "></div>
				<span className="px-4 text-sm  whitespace-nowrap text-iconClr w-full text-center">
					Log in directly with
				</span>
				<div className="flex-grow border-t border-borderStrokeClr w-full "></div>
			</div>
			<div className="grid grid-cols-7 gap-2">
				{images.map((image, index) => (
					<img
						key={index} 
						src={image}
						alt={`Icon ${index + 1}`} 
						className="p-3 border rounded-lg border-borderStrokeClr"
					/>
				))}
			</div>
		</div>
	);
};

export default AuthFooter;
