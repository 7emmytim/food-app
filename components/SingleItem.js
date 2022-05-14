import { BsPlusCircleFill } from 'react-icons/bs'

const SingleItem = ({ item }) => {
    return (
        <div className='bg-[#f7fafb] rounded-lg overflow-hidden'>
            <div className='p-3'>
                <img
                    className='h-40 w-full object-fill rounded-lg'
                    src={item.url}
                    alt=''
                />
            </div>
            <div className='divide-y-[1px]'>
                <div className='px-4 pb-2 space-y-1'>
                    <h4 className='text-xs xl:text-lg font-medium'>{item.title}</h4>
                    <p className='text-[0.6rem] xl:text-sm text-[#a4a4a4] font-light'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='grid grid-cols-2 divide-x-[1px]'>
                    <div className='px-4 py-2 xl:py-3 font-normal text-[0.7rem] xl:text-base flex items-center gap-2 cursor-pointer hover:opacity-60'>
                        <BsPlusCircleFill className='h-5 w-5' />
                        <span>Add to Order</span>
                    </div>
                    <div className='text-center px-4 py-2 xl:py-3 font-normal text-xs xl:text-base'>${item.price}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleItem