import React from "react";
import EXPLORER from "../../assets/icons/explore-icon.svg"
import MENU from "../../assets/icons/menu-icon.svg"
import PROFILE from "../../assets/icons/profile-pic-bottom.png"
import REFER from "../../assets/icons/refer-icon.svg"
import VIPCLUB from "../../assets/icons/vip-club-icon.svg"

const Footer = () => {
	return (
		<div
			className="section-padding "
			style={{
				backgroundColor: "rgba(50, 55, 56, 1)",
				borderRadius: "16px 16px 0 0",
                height:'61px'
			}}
		>
			<div className="flex justify-between w-full items-center h-full">
                <div className="flex items-center text-xs flex-col gap-y-1">
                    <img src={MENU} alt="mune" className="w-5 h-5"/>
                    <div>Menu</div>
                </div>
                <div className="flex items-center text-xs flex-col gap-y-1">
                    <img src={EXPLORER} alt="explorer" className="w-5 h-5"/>
                    <div>Explore</div>
                </div><div className="flex items-center text-xs flex-col gap-y-1">
                    <img src={REFER} alt="explorer" className="w-5 h-5"/>
                    <div>Refer</div>
                </div><div className="flex items-center text-xs flex-col gap-y-1">
                    <img src={VIPCLUB} alt="explorer" className="w-5 h-5"/>
                    <div>VIP Club</div>
                </div><div className="flex items-center text-xs flex-col gap-y-1">
                    <img src={PROFILE} alt="explorer" className="w-5 h-5 rounded-full"/>
                    <div>Profile</div>
                </div>
                
            </div>
            
		</div>
	);
};

export default Footer;
