import { Link } from "react-router";

const NavMobile = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  if (!isOpen) return null; // Если меню закрыто, не рендерим его

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>

      <nav className="w-[100px] bg-orange h-full flex flex-col items-center relative z-50">
        {/* Аватар */}
        <button className="mt-[60px] mb-[60px]">
          <img
            src="/img/avatar.png"
            alt="Avatar"
            className="border-solid border-2 border-white rounded-[100px] w-[60px]"
          />
        </button>

        {/* Список навигации */}
        <ul className="flex flex-col items-center flex-grow w-full">
          <li className="mb-[30px]">
            <a href="">
              <img src="/img/chat.png" alt="Chat" className="w-[40px]"/>
            </a>
          </li>
          <li className="mb-[30px]">
            <a href="">
              <img src="/img/notification.png" alt="Notifications" className="w-[40px]" />
            </a>
          </li>
          <li>
            <button>
              <img src="/img/settings.png" alt="Settings" className="w-[40px]" />
            </button>
          </li>
        </ul>

        {/* Кнопка выхода */}
        <Link to={"/login"} className="p-4 mb-5">
          <img src="/img/exit.png" alt="Exit" className="w-[40px]" />
        </Link>
      </nav>
    </div>
  );
};

export default NavMobile;
