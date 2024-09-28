import React from "react";
import Layout from '@/components/Layout'
import Image from 'next/image';


const view6 = () => {
    return (
        <>
            <Layout>
                <h1 className="text-center text-2xl p-4 font-bold">¡Cuentanos un poco de ti!</h1>
                <h3 className="text-center px-4 pb-10">Para personalizar tu perfil te pedimos que respondas los siguientes campos</h3>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start md:space-x-8 lg:flex-row lg:justify-between lg:items-start lg:space-x-8 px-4">
                    <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
                        <h3 className="text-xl mb-4">Datos personales</h3>
                        <div className="flex justify-center lg:justify-start">
                            <Image
                                src="/iconoframe.png"
                                alt="Foto de perfil"
                                width={150}
                                height={150}
                                className="rounded-full"
                            />
                        </div>
                    </div>

                    <div className="lg:w-2/3 flex flex-col items-center  lg:items-start">
                        <form className="w-full max-w-lg">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="Nombre"
                                    placeholder="Nombre"
                                    className="w-full px-4 py-2 border bg-[#F9F9F9] rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5]"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="apellido"
                                    placeholder="Apellido"
                                    className="w-full px-4 py-2 border bg-[#F9F9F9] rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5]"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="date"
                                    name="fechanacimiento"
                                    placeholder="Fecha de Nacimiento"
                                    className="w-full px-4 py-2 border bg-[#F9F9F9] rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5]"
                                />
                            </div>

                            <div className="mb-4">
                                <textarea
                                    name="descripcion"
                                    type= 'textarea'
                                    placeholder="¿Te gustaría describir un poco de ti?"
                                    className="w-full px-4 py-2 border bg-[#F9F9F9] rounded-md text-sm font-medium text-[#546E7A] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5] h-32"
                                />
                            </div>

                            <div className="flex justify-center lg:justify-start">
                                <button className="px-6 py-2 bg-[#2E7D32] text-white rounded-md hover:bg-[#1B5E20] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]">
                                    Inicia Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default view6; 