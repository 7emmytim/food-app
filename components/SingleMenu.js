const SingleMenu = ({ icon, title, subtitle }) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='rounded-full bg-white p-2'>
                {icon}
            </div>
            <div className='text-white text-xs xl:text-base'>
                <h4>{title}</h4>
                <h5 className='text-[0.6rem] xl:text-sm font-light text-[#a4a4a4]'>{subtitle}</h5>
            </div>
        </div>
    )
}

export default SingleMenu