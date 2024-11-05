import homebannerroulet from '../assets/homebannerroulet.png';
import PrimaryButton from '../components/PrimaryButton';

const HomePage = () => {
	return (
		<div className="banner-top-gradient  section-padding pt-14 pb-5">
			<div className="">
				<div className="w-full flex gap-5 justify-between home-banner-gradient rounded-lg py-5 px-2">
					<div className=' flex flex-col justify-between gap-10'>
						<div>
							<div className='font-bold text-18'
								style={{ color: "rgba(39, 200, 121, 1)" }}>
								120% Bonus  +
							</div>
							<div className='mt-3 max-w-24 text-12 font-bold'>
								100 Free Spin in Casino
							</div>
						</div>
						<div className='flex gap-1'>
							<PrimaryButton
								buttonLabel="Join Now"
								btnClass=""
							// disabled={loading || (type !== "investor" && type !== "fundraiser")}
							// navigateLink={ROUTES.SIGN_UP}
							/>
							<PrimaryButton
								buttonLabel='Learn More'
								btnClass='bg-none shadow-none !text-white'
							/>
						</div>

					</div>
					<img src={homebannerroulet}
						className='w-36 h-36'
					/>
				</div>
			</div>
		</div>
	)
}

export default HomePage;