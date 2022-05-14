import { items } from '../utils/items'
import SingleItem from './SingleItem'

const Items = ({ title }) => {
    return (
        <>
            <h3 className='text-[#333333] font-medium xl:font-semibold xl:text-2xl border-b-2 sm:border-b-0 border-[#f1b126] w-fit pt-4'>{title} Items</h3>
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
                {items.map(item => <SingleItem key={item.id} item={item} />)}
            </div>
        </>
    )
}

export default Items