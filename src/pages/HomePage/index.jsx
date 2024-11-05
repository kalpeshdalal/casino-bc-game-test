import HomeCategories from './HomeCategories';
import HomePageBanner from './HomePageBanner';
import RecentBigWins from './RecentBigWins';

const HomePage = () => {
	return (
		<div className=''>
			<HomePageBanner />
			<RecentBigWins />
			<HomeCategories />
		</div>
	)
}

export default HomePage;