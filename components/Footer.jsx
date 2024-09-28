import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t shadow-md mx-3 text-center p-3">
      <div className="grid grid-cols-3 gap-5 mb-[10px]">
        <p className="text-center cursor-pointer hover:font-bold">Términos y condiciones</p>
        <p className="text-center cursor-pointer hover:font-bold">Política de privacidad</p>
        <p className="text-center cursor-pointer hover:font-bold">Contacto</p>
      </div>
      <div className='flex items-center justify-center space-x-3 mb-[10px]'>
        <a href="">
          <img src="/Vector - 0 (1).svg" alt="Logo de meta" 
              className='transition-transform duration-300 hover:scale-110' />
        </a>
        
        <span>
          <a href="">
            <img src="/insta.svg" alt="Logo de Instagram" 
                className='transition-transform duration-300 hover:scale-110 hover:font-bold' />
          </a>
        </span>
      </div>
      <div className='flex items-center justify-center'>
        © 2024 AccessGo. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
