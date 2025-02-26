import { Link } from "react-router";

export default function Nav() {

  return (
    <nav className="h-screen">
      <div className="w-[100px] bg-orange h-full hidden  flex flex-col items-center sm:flex flex-col items-center">
        {/* Аватар */}
        <button className="mt-[60px] mb-[60px]">
          <img src="/img/avatar.png" alt="Avatar" className="border-solid border-2 border-white rounded-[100px] w-[60px]"/>
        </button>

        {/* Список навигации */}
        <ul className="flex flex-col items-center flex-grow w-full">
          <li className="mb-[30px]">
            <a href="" className=""><img src="/img/chat.png" alt="Chat" className="w-[40px]" /></a>
          </li>
          <li className="mb-[30px]">
            <a href=""><img src="/img/notification.png" alt="Notifications" className="w-[40px]" /></a>
          </li>
          <li>
            <button><img src="/img/settings.png" alt="Settings" className="w-[40px]" /></button>
          </li>
        </ul>

        {/* Кнопка выхода */}
        <Link to={'/login'} className="p-4 mb-5">
          <img src="/img/exit.png" alt="Exit" className="w-[40px]" />
        </Link>
      </div>
    </nav>
  );
}
