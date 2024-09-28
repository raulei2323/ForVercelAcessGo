import Layout from '../components/Layout';

export default function Donacion() {
  return (
    <Layout>
      <div className='w-full h-full flex flex-col justify-center lg:p-16 '>
        <div className='text-[#2F4F4F] text-center' >
          <p className='text-xl md:text-4xl lg:text-4xl font-bold '>¡Ayúdanos a Hacer del Mundo un Lugar Más Accesible!</p>
          <p className='text-sm mt-6 md:text-xl lg:text-xl ' >
            <strong>En AccesGo,</strong> nos dedicamos a ofrecerte la mejor información sobre la
            accesibilidad en establecimientos para que todos puedan disfrutar de
            espacios inclusivos y cómodos. Tu apoyo es fundamental para mantener
            y mejorar continúamente nuestro sitio web, asegurando que puedas
            encontrar la información que necesitas.
          </p>
          <p className='text-xl font-bold mt-8 md:text-2xl lg:text-2xl'>¿Cómo puedes ayudar?</p>
          <p className='text-sm mt-8 md:text-xl lg:text-xl'>
            Cada contribución, grande o pequeña, tiene un impacto significativo.
            Contribuye a la causa de la accesibilidad y ayuda a mantener
            AccesoGo como una herramienta esencial para todos. Puedes donar de
            manera rápida y segura
          </p>
        </div>

        <div className='bg-gray-100 rounded-xl w-full h-full flex flex-col justify-center items-center mt-8'>
          <button className='w-[194px] h-[50px] bg-[#2F4F4F] text-white mt-6'>
            <img src='' alt='' />
            Tarjeta de crédito
          </button>
          <input className='text-sm mt-8 border-b border-black ' type='text' placeholder='Banco' />
          <input className='text-sm mt-8 border-b border-black ' type='text' name='' id='' placeholder='Monto$$' />
          <input className='text-sm mt-8 border-b border-black' type='text' placeholder='MM/AA' />
          <input className='text-sm mt-8 border-b border-black' type='text' placeholder='CVV' />
          <button className='w-[111px] h-[30px] bg-[#2F4F4F] rounded-xl mt-6 grid grid-cols-5 text-white items-center' >
            <img className='col-start-2 col-end-2 w-[20px] h-[20px]' src='Union.svg' alt='' />
            <p className='col-start-3 col-end-3'>Donar</p>
          </button>

        </div>

        <div className='p-2'> 
          <div className='bg-[#2F4F4F] text-center text-white rounded-xl mt-8 p-4'>
          <p className='text-base font-semibold'>Tu donativo nos permitirá: </p>
          <ul>
            <li className='text-sm mt-6'>
              Actualizar la base de datos con la información más reciente.
              Mejorar las funcionalidades del sitio para ofrecer una experiencia
              más fluída. Garantizar el mantenimiento y la seguradad de la
              página.
            </li>
          </ul>
            </div> 

            <div>
          <input className='w-[328px] h-[158px] bg-gray-200 text-center mt-8 rounded-lg text-white' type="text" placeholder='Escribernos algun comentario' />
          <p className='text-[#2F4F4F] text-base text-center mt-8 font-bold'>¡Tu apoyo marca la diferencia!</p>

            </div>

        </div>
      </div>
    </Layout>
  );
}
