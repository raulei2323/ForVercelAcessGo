import React from "react";
import Layout from '@/components/Layout'



 const view4 = () => {
    return <>
    <Layout>
    <div>
        <h1 className="text-center text-2xl p-10 font-bold">Bienvenid@ a AccessGo</h1>

        <div className="text-center flex justify-center p-10 ">
            <form>
              
                 <div>
                 <input
                 type="text"
                 name="email"
                 placeholder="Correo Electronico" 
                 className="px-10 py-2 border bg-[#F6F9FF] m-2 rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5] "/>
                  </div>
                 
                 <div>
                 <input
                 type="password"
                 name="contraseña"
                 placeholder="Contraseña"
                 className="px-10 py-2 border bg-[#F6F9FF]  m-2 rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5] "/>
                 
                 </div>
                 
                 <div>
                 <input
                 type="password"
                 name="confirmacion"
                 placeholder="Confirma Contraseña"
                 className="px-10 py-2 border bg-[#F6F9FF] m-2  rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5] "/>
                 </div>
            </form>
        </div>
         <div className="text-center flex justify-center p-10 ">
            <form>
                <div>
                 <input
                 type="text"
                 name="Whatsaap"
                 placeholder="Numero de WhatsApp"
                 className="px-10 py-2 border bg-[#F6F9FF] m-2  rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5] "/>
                </div>
                
                 <div>
                 <input
                 type="password"
                 name="contraseña"
                 placeholder="Contraseña"
                 className="px-10 py-2 border bg-[#F6F9FF] m-2  rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5] "/>
                 </div>
                 
                 <div>
                 <input
                 type="password"
                 name="confirmacion"
                 placeholder="Confirma Contraseña"
                 className="px-10 py-2 border bg-[#F6F9FF] m-2  rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5] "/>
                 </div>
                
            </form>
            
        </div>
        <div className="flex justify-center items-center">
             <button className="px-6 py-2 border border-transparent rounded-md shadow-sm
              text-white bg-[#2F4F4F] hover:bg-[#004D40] focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-[#00695C]">Inicia Sesion</button>
            </div>


       

    </div>
    </Layout>

    </>
}

export default view4; 

