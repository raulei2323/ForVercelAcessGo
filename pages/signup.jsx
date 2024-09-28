import React from "react";
import Navbar from "@/components/Navbar";
import { FaGoogle } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { IoLogoApple } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";

const SignUp = () => {
    return (
    <div>
        <Navbar/>
    <div className="flex justify-center w-full bg-white mt-3">
        <div className="flex flex-col mt-3 h-screen items-center bg-white w-[300px] md:w-[600px] p-2">
          <div className="flex flex-col items-center">
            <h1 className="text-[#2F4F4F] text-2xl md:text-4xl font-bold mb-2">
              ¡Bienvenid@ a AccessGo!
            </h1>
            <h3 className="text-[#2F4F4F] text-lg mt-2 font-bold">Regístrate como persona</h3>
          </div>
          <div className="w-[250px] md:w-[400px] mt-4">
            <div className="mb-2">
              <a
                href=""
                className="flex items-center rounded-full justify-between bg-[#F5F0E5] hover:bg-[#E0D7C6] px-4 py-2"
              >
                <FaGoogle size={30} />
                <span className=" text-xs md:text-lg">Continúa con Google</span>
              </a>
            </div>
            <div className="mb-2">
              <a
                href=""
                className="flex items-center  rounded-full justify-between bg-[#F5F0E5] hover:bg-[#E0D7C6] px-4 py-2"
              >
                <SiFacebook size={30} />
                <span className=" text-xs md:text-lg">Continúa con Facebook</span>
              </a>
            </div>
            <div className="mb-2">
              <a
                href=""
                className="flex items-center  rounded-full justify-between bg-[#F5F0E5] hover:bg-[#E0D7C6]  px-4 py-2"
              >
                <IoLogoApple size={30} />
                <span className=" text-xs md:text-lg">Continúa con Apple</span>
              </a>
            </div>
            <div className="mb-2">
              <a
                href="/4/view4"
                className="flex items-center  rounded-full justify-between bg-[#F5F0E5] hover:bg-[#E0D7C6] px-4 py-2"
              >
                <IoLogoWhatsapp size={30} />
                <span className=" text-xs md:text-lg">Continúa con email o WhatsApp</span>
              </a>
            </div>
          </div>
         <div  className="flex flex-col items-center w-[250px] md:w-[400px] mt-4">
       
         
            <h3 className="text-[#2F4F4F] text-lg font-bold mb-2">Regístrate como empresa</h3>
       
          <div className="mt-2  w-[250px] md:w-[400px]">
            <a
              href="/notificacion13"
              className="flex items-center  rounded-full justify-between bg-[#F5F0E5] hover:bg-[#E0D7C6] px-4 py-2"
            >
              <MdAddBusiness size={30} />
              <span className=" text-xs md:text-lg">Soy empresa</span>
            </a>
          </div></div>
        </div>
    </div>
    </div>
      
    );
};

export default SignUp;
