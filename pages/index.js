import Items from '../components/Items'
import TopBanner from '../components/TopBanner'

const Dashboard = () => {
  return (
    <div className='space-y-6'>
        <TopBanner />
        <Items title='Popular' />
    </div>
  )
}

export default Dashboard