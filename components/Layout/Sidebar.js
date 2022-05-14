import { IoFastFoodOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'

const tabs = [{ to: '/', name: 'Dashboard' }, { to: '/available', name: 'Available Items' }]

const Sidebar = () => {

    const router = useRouter()

    return (
        <aside className='ml-[-100%] fixed z-10 top-0 px-3 xl:px-5 py-6 xl:py-8 w-full flex flex-col justify-between text-white h-screen bg-[#000] md:w-4/12 lg:ml-0 lg:w-[15%]'>
            <div className='space-y-4'>
                <IoFastFoodOutline className='text-[#f1b126] h-8 w-8 xl:h-10 xl:w-10' />
                <input
                    // onChange={handleSearch}
                    placeholder='Search'
                    className='w-full bg-[#181818] pl-3 py-1 xl:py-2 text-[#515151] placeholder:text-[#515151] placeholder:text-xs rounded-md text-xs focus:outline-none'
                />
                <div className='text-[#777777] capitalize text-xs xl:text-base space-y-2 xl:space-y-3 pt-4 xl:pt-5'>
                    {tabs.map(item => {
                        return (
                            <Link
                                href={item.to}
                                key={item.to}
                                className={`${router.pathname === item.to ? 'border-b-2 border-[#f1b126]' : 'border-b-2 border-[#000]'} block w-fit cursor-pointer`}
                            >
                                <span>{item.name}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar