import React from "react";
import Layout from '@/components/Layout'
import Image from 'next/image';

 const view8 = () => {
    return <>
    <Layout>
    <h1 className="text-center text-2xl p-10 font-bold">¡Bienvenid@ a AccessGo!</h1>
       
    <div>
        <div>
           <div className="grid grid-cols-2">
            <div className="flex justify-end mr-40">
            <div>
            <Image
                  src="/iconoframe.png"
                  alt="Foto de perfil"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="flex justify-center">NOMBRE</h3>
                </div>
            </div>

            <div>    
                <h3 className="flex justify-start  text-[#2F4F4F] font-semibold m-4">Sobre mi</h3>
                <span className="bg-[#F6F9FF] mr-40 text-start">texto que se usa habitualmente en diseño gráfico en demostraciones
                     </span>
            </div>
                
        </div>
        </div>
        

        


    </div>
    </Layout>

    </>
}
export default view8; 