import { Link } from "react-router";

export default function Nav() {

  return (
    <nav className="h-screen">
      <div className="w-[175px] bg-orange h-full hidden  flex flex-col items-center sm:flex flex-col items-center">
        {/* Аватар */}
        <button className="mt-[60px] mb-[60px]">
          <img src="/img/avatar.png" alt="Avatar" className="border-solid border-2 border-white rounded-[100px]"/>
        </button>

        {/* Список навигации */}
        <ul className="flex flex-col items-center flex-grow w-full">
          <li className="mb-[48px]">
            <a href="" className=""><img src="/img/chat.png" alt="Chat" /></a>
          </li>
          <li className="mb-[48px]">
            <a href=""><img src="/img/notification.png" alt="Notifications" /></a>
          </li>
          <li>
            <button><img src="/img/settings.png" alt="Settings" /></button>
          </li>
        </ul>

        {/* Кнопка выхода */}
        <Link to={'/login'} className="p-4 mb-5">
          <img src="/img/exit.png" alt="Exit" />
        </Link>
      </div>
    </nav>
  );
}
