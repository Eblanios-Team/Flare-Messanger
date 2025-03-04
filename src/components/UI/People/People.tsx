import React from 'react'

interface PeopleProps {
	username: string
	lastMsg: string
	dateOfLastMsg: string
	avatar: string
	hash?: string
}

const People: React.FC<PeopleProps> = ({ username, lastMsg, dateOfLastMsg, avatar, hash }) => {
	return (
		<li className='flex border-b-[1px] border-[#dbd3d3] border-opacity-[0.5] max-w-[250px] justify-between pb-[8px] mt-[15px]  hover:bg-slate-100'>
			<div className=' flex items-center'>
				<img src={avatar} alt='avatar' className='w-[40px] h-[40px] mr-[10px] rounded-full' />
				<div>
					<p className='text-[15px]'>{username}</p>
					<p className='text-[13px] font-light text-[303030]'>{lastMsg}</p>
				</div>
			</div>
			<div>
				<p className='text-[13px] font-light text-[#7C7C7C]'>{dateOfLastMsg}</p>
				{hash && <div className='Tag'>#{hash}</div>}
			</div>
		</li>
	)
}

export default People
