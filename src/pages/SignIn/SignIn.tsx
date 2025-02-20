import React, { useState } from 'react'
import { Link } from "react-router-dom"

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string | number>('')
  const [login, setLogin] = useState<string>('')

  // Стан для повідомлень про помилки
  const [emailError, setEmailError] = useState<boolean>(false)
  const [loginError, setLoginError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

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

  // Обробник для login
  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLogin = event.target.value;
    setLogin(newLogin);

    if (newLogin.trim() === '') {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  };

  // Обробник для password
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Наприклад, перевіримо, що пароль не порожній і має мінімум 6 символів
    if (newPassword.trim() === '' || newPassword.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password, login })
  }

  const isFormValid: boolean = Boolean(email && login && password && !emailError && !loginError && !passwordError)

  return (
    <div>
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
            <h2 className="text-4xl font-bold text-[#525252] mb-9 text-center">Sign in to your account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col w-full mb-40">
              <label htmlFor="login" className="flex flex-col text-sm font-semibold text-[#828282] mb-6">
                Login
                <input
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Your login"
                  required
                  className={`w-full h-11 rounded-md px-2.5 py-4 mt-1 text-[#A1A1A1] placeholder:text-[#E0E0E0] focus:outline-none border ${
                    loginError ? 'border-red-500' : 'border-[#DED2D9]'
                  }`}
                  value={login}
                  onChange={handleLoginChange}
                  autoComplete={'name'}
                />
              </label>
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
                  value={email}
                  autoComplete={'email'}
                  onChange={handleEmailChange}
                />
              </label>
              <label htmlFor="password" className="flex flex-col text-sm font-semibold text-[#828282] mb-8">
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className={`w-full h-11 rounded-md px-2.5 py-4 mt-1 text-[#A1A1A1] placeholder:text-[#E0E0E0] focus:outline-none border ${
                    passwordError ? 'border-red-500' : 'border-[#DED2D9]'
                  }`}
                  autoComplete={'new-password'}
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <button
                className="w-full h-11 border rounded-md bg-orange text-white font-extrabold disabled:bg-neutral-200"
                type="submit"
                disabled={!isFormValid}
              >
                Sign In
              </button>
            </form>
            <span className="text-[#828282] text-lg font-normal text-center mb-10">
              You have account?
              <Link to={'/login'} className="text-orange font-semibold ml-4">Login an account</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// modal (useEffect + portal API)

export default SignIn