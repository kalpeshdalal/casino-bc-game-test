const RecentWinCard = ({ item, key, currentActive }) => {
	if (currentActive === "All" || currentActive === item?.type) {
		return (
			<div key={key} className="text-10">
				<img src={item?.gameObj?.banner}
					className="w-[86px] h-[100px]"
				/>
				<div className="p-1 flex flex-col items-center">
					<div className="flex gap-1 items-center">
						<img src={item?.badgeImg} />
						<div className="">
							{item?.gameObj?.title}
						</div>
					</div>
					<div className="text-greenClr mt-0.5">
						{item?.winAmount} {item?.unit}
					</div>
				</div>
			</div>
		)
	} else {
		return null
	}
}

export default RecentWinCard;