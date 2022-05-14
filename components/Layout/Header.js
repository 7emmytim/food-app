import Image from 'next/image'
import { FiBell, FiSearch, FiShoppingBag } from 'react-icons/fi'

const Header = () => {
    return (
        <div className='sticky z-10 top-0 px-5 py-3 border-b-[1px] border-[#e0e0e0] bg-white'>
            <div className='flex items-center justify-between'>
                <span></span>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-4'>
                        <FiSearch className='xl:h-6 xl:w-6' />
                        <FiBell className='xl:h-6 xl:w-6' />
                        <FiShoppingBag className='xl:h-6 xl:w-6' />
                    </div>
                    <Image layout='fill' src='https://i.pravatar.cc/300?img=2' className='h-10 w-10 xl:h-12 xl:w-12 rounded-full' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Header