import { useState } from "react";
import recentwincard1 from '../../assets/recentwincard1.png';
import recentwincard2 from '../../assets/recentwincard2.png';
import recentwincard3 from '../../assets/recentwincard3.png';
import badgegold from '../../assets/badgegold.png';
import RecentWinCard from "../../components/RecentWinCard";

const RecentBigWins = () => {

	const [currentActive, setCurrentActive] = useState("All")
	let recentWinsTypes = [
		{
			title: "All",
		},
		{
			title: "BC Originals",
		},
		{
			title: "Slots",
		},
		{
			title: "Live Casino",
		},
	]

	let winnings = [
		{
			type: "BC Originals",
			gameObj: {
				banner: recentwincard1,
				title: "Game 1"
			},
			winAmount: 239.00,
			unit: "USDT",
			badgeImg: badgegold,
		},
		{
			type: "BC Originals",
			gameObj: {
				banner: recentwincard2,
				title: "Game 2"
			},
			winAmount: 429.00,
			unit: "BTC",
			badgeImg: badgegold,
		},
		{
			type: "BC Originals",
			gameObj: {
				banner: recentwincard3,
				title: "Game 3"
			},
			winAmount: 259.00,
			unit: "USDT",
			badgeImg: badgegold,
		},
		{
			type: "Slots",
			gameObj: {
				banner: recentwincard3,
				title: "Game 1"
			},
			winAmount: 39.00,
			unit: "USDT",
			badgeImg: badgegold,
		},
		{
			type: "Slots",
			gameObj: {
				banner: recentwincard2,
				title: "Game 2"
			},
			winAmount: 1029.00,
			unit: "BTC",
			badgeImg: badgegold,
		},
		{
			type: "Slots",
			gameObj: {
				banner: recentwincard1,
				title: "Game 3"
			},
			winAmount: 259.00,
			unit: "USDT",
			badgeImg: badgegold,
		},
		{
			type: "Live Casino",
			gameObj: {
				banner: recentwincard3,
				title: "Game 1"
			},
			winAmount: 509.00,
			unit: "USDT",
			badgeImg: badgegold,
		},
		{
			type: "Live Casino",
			gameObj: {
				banner: recentwincard1,
				title: "Game 2"
			},
			winAmount: 29.00,
			unit: "BTC",
			badgeImg: badgegold,
		},
		{
			type: "Live Casino",
			gameObj: {
				banner: recentwincard2,
				title: "Game 3"
			},
			winAmount: 159.00,
			unit: "USDT",
			badgeImg: badgegold,
		},
	]
	return (
		<div className="mt-3 section-padding">
			<div className=" flex items-center gap-3 overflow-x-auto scrollbar-hide">
				<div className="font-extrabold leading-4 flex gap-1 whitespace-nowrap items-center">
					<div className="bg-greenClr w-[7px] h-[7px] text-12 rounded-full"></div>
					Recent Big Wins
				</div>
				{recentWinsTypes?.length ?
					recentWinsTypes.map((item, idx) => (
						<div key={idx}
							className={`font-bold px-2 text-10 whitespace-nowrap border-b 
								${currentActive === item?.title ? ' border-b-greenClr' : 'border-b-transparent'}
								leading-5`
							}
							onClick={() => {
								setCurrentActive(item?.title)
							}}
						>
							{item?.title}
						</div>
					))
					:
					""
				}
			</div>
			{winnings?.length ?
				<div className="grid grid-cols-4 gap-3 mt-3 overflow-x-auto scrollbar-hide">
					{winnings?.map((item, idx) => (
						<RecentWinCard
							item={item}
							key={idx}
							currentActive={currentActive}
						/>
					))}
				</div>
				:
				<div className="mt-3 text-center">
					No winning Records
				</div>
			}
		</div>
	)
}
export default RecentBigWins;