import casinoicon from '../../assets/casinoicon.png';
import slotsicon from '../../assets/slotsicon.png';
import homecasinologo from '../../assets/homecasinologo.png';
import homeslotlogo from '../../assets/homeslotlogo.png';
import homefastgamelogo from '../../assets/homefastgamelogo.png';
import homeesportlogo from '../../assets/homeesportlogo.png';
import homesportlogo from '../../assets/homesportlogo.png';
import homelotterylogo from '../../assets/homelotterylogo.png';
import fastgameico from '../../assets/fastgameico.png';
import esportico from '../../assets/esportico.png';
import sportico from '../../assets/sportico.png';
import lotteryico from '../../assets/lotteryico.png';

const HomeCategories = () => {

	let subCategories = [
		{
			title: "Fast Game",
			ico: fastgameico,
			logo: homefastgamelogo,
		},
		{
			title: "E-Sport",
			ico: esportico,
			logo: homeesportlogo,
		},
		{
			title: "Sports",
			ico: sportico,
			logo: homesportlogo,
		},
		{
			title: "Lottery",
			ico: lotteryico,
			logo: homelotterylogo,
		},
	]

	return (
		<div className='section-padding mt-2'>
			<div className='grid grid-cols-2 gap-3 text-12'>
				<div className='relative home-casino-card-bg p-3 rounded-xl flex justify-end items-center'>
					<img
						src={homecasinologo}
					/>
					<div className='absolute top-3 left-3 flex gap-[6px] items-center'>
						<img
							src={casinoicon}
						/>
						<div className='uppercase'>
							Casino
						</div>
					</div>
				</div>
				<div className='relative home-slots-card-bg p-3 rounded-xl flex justify-end items-center'>
					<img
						src={homeslotlogo}
					/>
					<div className='absolute top-3 left-3 flex gap-[6px] items-center'>
						<img
							src={slotsicon}
						/>
						<div className='uppercase'>
							Slots
						</div>
					</div>
				</div>
			</div>
			{subCategories?.length ?
				<div className='grid grid-cols-4 gap-3 text-10 mt-3'>
					{subCategories.map((item, idx) => (
						<div key={idx} className='bg-bgSecondaryClr py-3 px-2 flex justify-center items-center flex-col gap-2 rounded-lg'>
							<div className='flex gap-1 items-center text-10 uppercase font-extrabold'>
								<img
									src={item?.ico}
								/>
								<div>{item?.title}</div>
							</div>
							<img
								src={item?.logo}
							/>

						</div>
					))}
				</div>
				:
				""
			}
		</div>
	)
}
export default HomeCategories;