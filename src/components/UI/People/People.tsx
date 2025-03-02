const People = () => {
	return (
		<li className='flex border-b-[1px] border-[#dbd3d3] border-opacity-[0.5] max-w-[250px] justify-between pb-[8px] mt-[15px]  hover:bg-slate-100'>
			<div className=' flex items-center'>
				<img src='/img/people-1.png' alt='' className='w-[40px] h-[40px] mr-[10px] ' />
				<div className=''>
					<p className='text-[15px]'>Anil</p>
					<p className='text-[13px] font-light text-[303030]'>April fool’s day</p>
				</div>
			</div>
			<div className=''>
				<p className='text-[13px] font-light text-[#7C7C7C]'>Today, 9.52pm</p>
				<div className='Tag'></div>
			</div>
		</li>
	)
}

export default People
