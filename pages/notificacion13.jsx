import Layout from '../components/Layout';


export default function Notificacion() {
  return (
    <Layout>
      <div className='w-full h-full flex flex-col text-[#2F4F4F] mt-2'>
        <div className='flex flex-col text-center '>
          <p className='text-base font-bold mt-8'>¡Bienvenido a AccessoGo!</p>
          <p className='text-sm font-semibold mt-6'>
            En AccesoGo, invitamos a todas las empresas a unirse a esta causa
            importante y a marcar una diferencia real en la vida de muchas
            personas Regístrate y elige entre dos opciones de perfil:
          </p>

          <p className='text-sm font-semibold mt-6'>Perfil Gratuito:</p>
          <ol>
            <p className='text-sm font-semibold mt-6'>
              Incluye información básica sobre accesibilidad. Aparece en
              nuestras búsquedas para comenzar a mostrar tu compromiso.
            </p>
          </ol>

          <li className='text-sm font-semibold mt-6'>Perfil Premium:</li>
          <ol>
            <li className='text-sm font-semibold mt-6'>
              Todo lo del perfil Gratuito más: Mayor Visibilidad: Herramientas
              avanzadas para destacarte.
            </li>
            <li className='text-sm font-semibold mt-6'>
              Estadísticas Detalladas: Oportunidades Destacadas: Aparece en
              nuestra página princilpal y más...
            </li>
          </ol>
        </div>

        <div className='flex flex-col text-center mt-8 text-sm'>
          <p className='mt-6'>
            Tu puedes generar información de tu establecimiento o negocio
            indicando las diferentes formas en las cuales tu negocio es
            accesible y los nivieles de accesibilidad.
          </p>
          <p className='mt-6'>
            Los niveles de accesibilidad son verificados con las resenas y los
            comentarios de nuestros usuarios.
          </p>
          <p className='mt-6'>
            En caso de ser detectada información falsa en el registro de alguna
            cuenta Premium dicha cuenta podria ser cancelada.
          </p>
          <p className='mt-6'>
            Si tu estableciento o negocio no cuenta con la infraestructura que
            registraste al crear tu cuenta premium te pediremos que rectifiques
            la información.
          </p>
          <p className='mt-6'>
            Si tu establecimiento no cuenta con ninguna forma de accesibilidad
            NO podrá calificar para ser parte de nuestra comunidad.
          </p>
          <p className='mt-6'>
            SI adquiriste una cuenta premium y se detecto que tu negocio o
            establecimiento no contaba con ningun nivel de accesibilidad tu
            cuenta Premium sera dada de baja.
          </p>
        </div>
        <div className='flex flex-row justify-between items center mt-10'>
            <button className='w-[155px] h-[40px] border-2 rounded-lg'>Cancelar</button>
            <a href="/formularioAccesibilidad" className='w-[155px] h-[40px] bg-[#2F4F4F] text-white rounded-lg flex items-center justify-center'>
             Continuar</a>
                         
        </div>
      </div>
    </Layout>
  );
}
