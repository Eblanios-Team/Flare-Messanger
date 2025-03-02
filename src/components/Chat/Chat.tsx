const Chat = () => {
	return (
		<section className='hidden sm:flex flex-col h-screen ml-[47px] w-full'>
			{/* Верхняя панель с именем и статусом */}
			<div className='flex justify-between items-center p-4 border-b border-[#B4ABAB] border-opacity-50'>
				<div className='flex items-center'>
					<img src='/img/people-1.png' className='w-[45px] h-[45px] mr-4' alt='User' />
					<div>
						<p className='font-bold text-[#303030]'>Anil</p>
						<p className='text-slate-500'>Online - Last seen, 2:02 PM</p>
					</div>
				</div>
				<button className='p-2'>
					<img src='/img/parameters.png' alt='Settings' className='w-[7px] h-[25px]' />
				</button>
			</div>

			{/* Контейнер с сообщениями */}
			<div className='flex-1 overflow-y-auto p-4 flex flex-col justify-end space-y-4'>
				{/* Сообщение слева */}
				<div className='flex justify-start'>
					<p className='px-6 py-3 text-[#303030] bg-[#E7E7E7] rounded-2xl max-w-[300px]'>Hello</p>
				</div>

				{/* Сообщение справа */}
				<div className='flex justify-end'>
					<p className='px-6 py-3 text-white bg-orange rounded-2xl max-w-[300px]'>How are you?</p>
				</div>
			</div>

			{/* Панель ввода сообщения */}
			<div className='flex items-center bg-white mb-[25px] relative'>
				<button className='p-2 absolute left-[10px]'>
					<img src='/img/files.png' alt='files' className='w-6 h-6' />
				</button>
				<input
					type='text'
					placeholder='Type your message here...'
					className='bg-[#EFF6FC] h-[50px] w-full rounded-[10px] focus:outline-none pl-[55px]'
				/>
				<button className='p-2 bg-orange w-[50px] h-[50px] flex justify-center items-center rounded-[15px] mr-[10px] ml-[10px]'>
					<img src='/img/microphone.png' alt='Send' className='w-6 h-6 ' />
				</button>
			</div>
		</section>
	)
}

export default Chat
