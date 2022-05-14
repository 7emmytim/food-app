import { BiTimeFive } from 'react-icons/bi'
import { GiMoneyStack } from 'react-icons/gi'
import { GrDeliver, GrMoney } from 'react-icons/gr'
import SingleMenu from './SingleMenu'

const TopBanner = () => {
    return (
        <div className='grid grid-cols-1 xs:grid-cols-4 gap-6 md:pt-24'>
            <div className='bg-[#030303] col-span-2 md:col-span-1 rounded-lg p-8 xl:p-10 space-y-4'>
                <h3 className='text-white text-xs xl:text-base'>Shipping Details</h3>
                <SingleMenu icon={<GiMoneyStack />} title={'0.50$'} subtitle='Delivery Fees' />
                <SingleMenu icon={<GrDeliver />} title={'20-30 min'} subtitle='Arrival Time' />
            </div>
            <div className='hidden md:block col-span-2 bg-cover bg-no-repeat rounded-lg p-8 xl:p-10 relative' style={{ background: 'url("https://images.unsplash.com/photo-1498522271744-cdd435c13f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")' }}>
                <div>
                    <img
                        src='/profession.png'
                        alt='' className='absolute bottom-0 left-1/4 object-fill h-64 w-64 xl:h-80 xl:w-80' />
                </div>
            </div>
            <div className='bg-[#030303] col-span-2 md:col-span-1 rounded-lg p-8 xl:p-10 space-y-4'>
                <h3 className='text-white text-xs xl:text-base'>Order Details</h3>
                <SingleMenu icon={<GrMoney />} title={'130.50$'} subtitle='Minimum Order' />
                <SingleMenu icon={<BiTimeFive />} title={'8am - 5pm'} subtitle='Order Time' />
            </div>
        </div>
    )
}

export default TopBanner