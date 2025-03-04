import { Link } from 'react-router'
import React, { useState, useEffect } from 'react'
import Modal from '../UI/Modal/Modal.tsx'

export default function Nav() {
	const [showModal, setShowModal] = useState<boolean>(false)

	const [email, setEmail] = useState<string>('')
	const [login, setLogin] = useState<string>('')
	const [bio, setBio] = useState<string>('')

	const [emailError, setEmailError] = useState<boolean>(false)
	const [loginError, setLoginError] = useState<boolean>(false)
	const [bioError, setBioError] = useState<boolean>(false)

	// Стейт для зберігання URL прев'ю
	const [fileName, setFileName] = useState<string | null>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]

		if (file) {
			// Генеруємо Object URL для прев'ю
			const objectUrl = URL.createObjectURL(file)
			setFileName(objectUrl)

			// Повідомлення з ім'ям файла
			alert(`Ви вибрали: ${file.name}`)
		} else {
			setFileName(null)
		}
	}

	useEffect(() => {
		return () => {
			if (fileName) {
				URL.revokeObjectURL(fileName)
			}
		}
	}, [fileName])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('s')
	}

	// Функція валідації email
	const isValidEmail = (email: string): boolean => {
		return /^\S+@\S+\.\S+$/.test(email) // Простий regex для email
	}

	// Обробник для email
	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newEmail = event.target.value
		setEmail(newEmail)
		// todo фіксанути пробіли
		// Поле валідне, якщо воно порожнє або містить коректний email
		setEmailError(newEmail.trim() !== '' && !isValidEmail(newEmail))
	}

	// Обробник для login
	const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newLogin = event.target.value
		setLogin(newLogin)

		if (newLogin.trim().length > 3 || newLogin.length == 0) {
			setLoginError(false) // Якщо більше 4 символів, помилки немає
		} else {
			setLoginError(true) // Якщо 4 або менше, показуємо помилку
		}
	}

	const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newBio = event.target.value
		setBio(newBio)

		// Валідація:
		// - Поле валідне, якщо воно пусте АБО містить не-пробільні символи
		// - Невалідне, якщо є символи, але це лише пробіли
		if (newBio.length > 0 && newBio.trim().length === 0) {
			setBioError(true) // Помилка: є символи, але це лише пробіли
		} else {
			setBioError(false) // Валідне: або пусте, або є текст
		}
	}

	const isFormValid: boolean = Boolean(!loginError && !bioError && !emailError)

	const changeUserInfo = () => {
		console.log(login, email, bio, fileName)
		setShowModal(false)
	}

	// todo пофіксити хуйню що форма зразу валідна

	return (
		<>
			<Modal opened={showModal}>
				<div className='h-full w-full flex flex-col justify-between relative'>
					<img
						src='/img/close-btn.svg'
						alt='close'
						width={13}
						height={13}
						onClick={() => setShowModal(false)}
						className='cursor-pointer top-0 right-0 absolute'
					/>
					<form onSubmit={handleSubmit} className='w-80 mx-auto'>
						<div className='flex flex-col items-center mt-3.5 mb-12'>
							<label htmlFor='file-input' className='cursor-pointer inline-flex items-center'>
								{fileName ? (
									// Показуємо прев'ю, якщо є файл
									<img
										src={fileName}
										alt="Прев'ю зображення"
										className='w-24 h-24 rounded-full object-cover'
									/>
								) : (
									// Показуємо пустий аватар, якщо файлу немає
									<img src='/img/empty-avatar.svg' alt='Завантажте фото' className='w-24 h-24' />
								)}
							</label>

							<input
								id='file-input'
								type='file'
								className='hidden'
								onChange={handleFileChange}
								accept='image/*' // Обмежуємо вибір тільки зображеннями
							/>
						</div>

						<label // USERNAME
							htmlFor='username'
							className='flex flex-col text-sm font-semibold text-[#4C535F] mb-6'>
							Username
							<input
								type='text'
								name='username'
								id='username'
								placeholder='Please enter your username'
								className={`text-[.8rem] w-full h-11 rounded-md px-2.5 py-2.5 text-[#4C535F] placeholder:text-[#8D98AA] bg-[#EDF2F6] focus:focus:outline-none border ${
									loginError ? 'border-red-500' : 'border-[#E0E4EC]'
								}`}
								autoComplete={'login'}
								value={login}
								onChange={handleLoginChange}
							/>
						</label>
						<label // E-MAIL
							htmlFor='email'
							className='flex flex-col text-sm font-semibold text-[#4C535F] mb-6'>
							Email
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Your Email'
								className={`text-[.8rem] w-full h-11 rounded-md px-2.5 py-2.5 text-[#4C535F] placeholder:text-[#8D98AA] bg-[#EDF2F6] focus:focus:outline-none border ${
									emailError ? 'border-red-500' : 'border-[#E0E4EC]'
								}`}
								autoComplete={'email'}
								value={email}
								onChange={handleEmailChange}
							/>
						</label>
						<label // bio
							htmlFor='bio'
							className='flex flex-col text-sm font-semibold text-[#4C535F]'>
							Bio
							<textarea
								name='bio'
								id='bio'
								placeholder='Write your Bio...'
								className={`resize-none text-[.8rem] w-full min-h-[270px] rounded-md px-2.5 py-2.5 text-[#4C535F] placeholder:text-[#8D98AA] bg-[#EDF2F6] focus:focus:outline-none border ${
									bioError ? 'border-red-500' : 'border-[#E0E4EC]'
								}`}
								value={bio}
								onChange={handleBioChange}
								maxLength={360}
							/>
						</label>
					</form>
					<button
						type='submit'
						onClick={changeUserInfo}
						disabled={!isFormValid}
						className='w-full h-11 border rounded-md bg-orange text-white font-extrabold disabled:bg-neutral-200'>
						Update Profile
					</button>
				</div>
			</Modal>
			<nav className='h-screen'>
				<div className='w-[100px] bg-orange h-full hidden  flex flex-col items-center sm:flex flex-col items-center'>
					{/* Аватар */}
					<button className='mt-[60px] mb-[60px]'>
						<img
							src='/img/avatar.png'
							alt='Avatar'
							className='border-solid border-2 border-white rounded-[100px] w-[60px]'
						/>
					</button>

					{/* Список навигации */}
					<ul className='flex flex-col items-center flex-grow w-full'>
						<li className='mb-[30px]'>
							<a href='' className=''>
								<img src='/img/chat.png' alt='Chat' className='w-[40px]' />
							</a>
						</li>
						<li className='mb-[30px]'>
							<a href=''>
								<img src='/img/notification.png' alt='Notifications' className='w-[40px]' />
							</a>
						</li>
						<li>
							<button onClick={() => setShowModal(true)}>
								<img src='/img/settings.png' alt='Settings' className='w-[40px]' />
							</button>
						</li>
					</ul>

					{/* Кнопка выхода */}
					<Link to={'/login'} className='p-4 mb-5'>
						<img src='/img/exit.png' alt='Exit' className='w-[40px]' />
					</Link>
				</div>
			</nav>
		</>
	)
}
