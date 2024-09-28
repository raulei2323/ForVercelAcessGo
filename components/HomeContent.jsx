
import EstablecimientoSlider from "./Molecules/establesamientoSlider";
import ParticipaSlider from "./Molecules/participaSlider";

const HomeContent = () => {
  

    return (
      <div className="flex flex-col text-[#2F4F4F] w-full justify-center font-sans"> 
         
         <div className="flex flex-col md:items-center md:flex-row gap-4 mx-[25px] p-2 text-[#2F4F4F]">
            <div className="flex-1 text-center md:text-left mt-[10px]">
              <p className="text-center md:text-left">Encuentra tu lugar favorito</p>
              <h1 className="text-4xl font-bold mb-2">¡Bienvenido a AccessGo!</h1>
              <p>
                La accesibilidad es un derecho fundamental. Con AccessGo facilitamos tu búsqueda de establecimientos incluyentes, ayudándote a encontrar lugares que se ajusten a tus necesidades específicas.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <img 
                className="h-200px md:h-[400px]" 
                src="/Group 4717@2x.png" 
                alt="Tarjetas con tres imágenes de personas con discapacidad siendo incluidas en diferentes escenarios, de títulos: Accesibilidad, Inclusión, AccessGo" 
              />
            </div>
          </div>


         
        <div className=" mx-2 md:mx-[25px]">
          <h3 className="text-2xl text-center md:text-left font-bold mb-2">Visita a nuestros socios</h3>
          <p className="text-center md:text-left">Para ti, que buscas un lugar para pasar un buen rato:</p>
          <div className="hidden md:flex flex-wrap justify-center gap-[17.5px] mt-[51px] mb-4">
            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Restaurantes</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>

            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Hoteles</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>
            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Turismo</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>
            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Hospitales</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>
            <div className="relative border w-[215px] h-[257px] rounded custom-max:block hidden">
            <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Museos</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>
            </div>
            <div className="relative border w-[215px] h-[257px] rounded custom-max:block hidden">
            <img 
                src="/simon-karemann-p85-MG66GRY-unsplash 1.svg" 
                alt="Imagen random de un lugar" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">Espacios Recreativos</h4>
                <div className="flex items-center mb-1">
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                  <img src="/estrellita.svg" alt="star" className="w-4 h-4 mr-[3px]" />
                </div>
                <p className="text-[10px] mt-2">100% Acceso</p>
              </div>

            </div>
          </div>

        </div>
  

        <div className="md:hidden mt-2 flex justify-center">
        
        <EstablecimientoSlider/>
        
      </div>

      
        <div className="mt-4 mx-2 md:mx-[25px]">
          <h3 className="text-2xl text-center md:text-left font-bold mb-2">Y también para ti, que buscas ser parte del cambio:</h3>
          <p className="text-center md:text-left">Sé parte del cambio y muestra tu compromiso con la accesibilidad</p>
          <ul className="hidden sm:flex  sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-3">
            <li className="card border rounded w-[223px] h-[178px] mb-4 sm:mb-0">
              <div><img className="w-[24px] h-[24px] mt-[16px] ml-[16px] mb-[13px]" src="/ayudar.png" alt="un saludo que establece el acuerdo de ayudar al prógimo" /></div>
              <div><p className="ml-[16px] font-bold">Voluntariado</p>
              <p className="ml-[16px]">Únete a nuestra red de voluntariado y contribuye con tu tiempo y habilidades.</p>
              </div>
            </li>
            <li className="card rounded border w-[223px] h-[178px] mb-4 sm:mb-0"><div><img className="w-[24px] h-[24px] mt-[16px] ml-[16px] mb-[13px]" src="/donar.svg" alt="un saludo que establece el acuerdo de ayudar al prógimo" /></div>
              <div><p className="ml-[16px] font-bold">Donaciones</p>
              <p className="ml-[16px]">Apoya con donaciones para mejorar la accesibilidad en diferentes lugares.</p>
              </div></li>
          </ul>

          <div className="md:hidden mt-3 flex justify-center">
        
        <ParticipaSlider/>
        
      </div>
          <div className="mt-3 flex text-center justify-center">
            <h3 className="text-2xl font-bold mb-2">¡Juntos podemos hacer del mundo un lugar más accesible para todos!</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeContent;
  