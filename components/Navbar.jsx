import React, { useState } from 'react'; // Asegúrate de importar useState
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <header className="bg-white border-b shadow-md p-2">
      <nav className="flex items-center justify-between">
        <div className="ml-[30px] md:ml-[40px] flex-shrink-0 flex items-center space-x-2">
          <a href="/" className="sm:block md:hidden text-xl font-bold hover:underline">
            <img src="/Union.svg" alt="Logo AccessGo simplificado" />
          </a>
          <span>
            <a href="/" className="hidden md:block text-xl font-bold hover:underline">
              <img src="/logo2.svg" alt="Logo AccessGo" />
            </a>
          </span>
        </div>

        <div className="flex items-center space-x-4 mr-[30px] md:mr-[40px]">
          {router.pathname !== '/login' && (
            <a href="/login" className="hidden font-bold lg:block bg-white border-black border-2 hover:bg-[#2F4F4F] text-[#2F4F4F] hover:text-white px-4 py-2 rounded rounded-l-full rounded-r-full">
              Inicia Sesión
            </a>
          )}

          {router.pathname !== '/signup' && (
            <a href="/signup" className="bg-[#2F4F4F] font-bold hover:bg-[#4A6969] text-white px-4 py-2 rounded-l-full rounded-r-full flex items-center space-x-2 w-[117px]">
              <img src="/heart_plus_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1) 1.svg" alt="heart with plus" className="w-6 h-6" />
              <span>¡Únete!</span>
            </a>
          )}

          <div className="relative md:hidden">
            <button 
              onClick={toggleMenu} 
              className="bg-[#ECEFF1] hover:bg-[#B0BEC5] text-white p-2 rounded"
            >
              <img src="/menu.svg" alt="menú desplegable" />
            </button>
            {menuVisible && ( 
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
                <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                  Inicia Sesión
                </a>
                <a href="/option2" className="block px-4 py-2 hover:bg-gray-100">
                  Opción 2
                </a>
                <a href="/option3" className="block px-4 py-2 hover:bg-gray-100">
                  Opción 3
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
