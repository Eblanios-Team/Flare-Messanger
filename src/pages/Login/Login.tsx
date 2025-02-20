import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Modal from "../../components/Modal/Modal.tsx";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string | number>('')
  const [isRemember, setIsRemember] = useState<boolean>(false)

  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const [showModal, setShowModal] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password, isRemember })
  }

  // Функція валідації email
  const isValidEmail = (email: string): boolean => {
    // Простий regex для перевірки email (не є ідеальним)
    return /^\S+@\S+\.\S+$/.test(email);
  };

  // Обробник для email
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (newEmail.trim() === '' || !isValidEmail(newEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  // Обробник для password
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword.trim() === '' || newPassword.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const isFormValid: boolean = Boolean(email && password && !emailError && !passwordError)
  const isEmailValid: boolean = Boolean(email && !emailError)


  return (
    <div>
      <Modal opened={showModal}>
        <h3 className="text-4xl font-bold text-[#525252] mb-9 text-center">Password recovery</h3>
        <p>An email has been sent to your address<br/><b>{email}</b> .<br/>I’m not sure how to explain it properly, but it’s something like instructions for resetting your password. If you can’t remember your password, my advice to you is: eat nuts and drink more coffee, as it helps with Alzheimer’s.</p>
        <button
          onClick={() => setShowModal(false)}
          type="button"
          className="w-full h-11 border rounded-md bg-orange text-white font-extrabold disabled:bg-neutral-200"
        >
          Okay, thank you
        </button>
      </Modal>
      <div className="flex md:flex-row min-h-screen items-end">
        {/* Левая часть */}
        <div className="hidden xl:flex flex-1 items-center justify-center w-full relative h-screen">
          <img
            src="/img/auth-hero.png"
            alt="auth-hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Правая часть */}
        <div className="flex-1 flex items-end justify-center">
          <div className="flex flex-col items-center w-full max-w-sm ">
            <img src="/img/logo.svg" alt="logo" width={118} height={124} className="mb-14"/>
            <h2 className="text-4xl font-bold text-[#525252] mb-9 text-center">Login to your Account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col w-full mb-48">
              <label htmlFor="email" className="flex flex-col text-sm font-semibold text-[#828282] mb-6">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className={`w-full h-11 rounded-md px-2.5 py-4 mt-1 text-[#A1A1A1] placeholder:text-[#E0E0E0] focus:outline-none border ${
                    emailError ? 'border-red-500' : 'border-[#DED2D9]'
                  }`}
                  required
                  autoComplete={'email'}
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <label htmlFor="password" className="flex flex-col text-sm font-semibold text-[#828282] mb-2">
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className={`w-full h-11 rounded-md px-2.5 py-4 mt-1 text-[#A1A1A1] placeholder:text-[#E0E0E0] focus:outline-none border ${
                    passwordError ? 'border-red-500' : 'border-[#DED2D9]'
                  }`}
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <div className="flex w-full justify-between items-center mb-8">
                <label htmlFor="checkbox" className="text-xs text-[#A1A1A1] font-normal flex items-center justify-between">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    className="w-3 h-3 mr-2 accent-orange text-white"
                    checked={isRemember}
                    onChange={() => setIsRemember(prev => !prev)}
                  />
                  Remember me
                </label>
                <button
                  className="text-orange font-semibold text-xs disabled:text-neutral-200 hover:underline"
                  onClick={() => setShowModal(true)}
                  disabled={!isEmailValid}
                >
                  Forgot Password?
                </button>
              </div>
              <button
                className="w-full h-11 border rounded-md bg-orange text-white font-extrabold disabled:bg-neutral-200"
                type="submit"
                disabled={!isFormValid}
              >
                Login
              </button>
            </form>
            <span className="text-[#828282] text-lg font-normal text-center mb-10">
              Not Registered Yet?
              <Link to={'/sign-in'} className="text-orange font-semibold ml-4 hover:underline">Create an account</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// баг когда модалка открывается, форма отправляется

export default SignIn