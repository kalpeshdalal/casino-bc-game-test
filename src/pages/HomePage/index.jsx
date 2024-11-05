import HomeCategories from './HomeCategories';
import HomePageBanner from './HomePageBanner';
import RecentBigWins from './RecentBigWins';

const HomePage = () => {
	return (
		<div className='pb-20'>
			<HomePageBanner />
			<RecentBigWins />
			<HomeCategories />
		</div>
	)
}

export default HomePage;