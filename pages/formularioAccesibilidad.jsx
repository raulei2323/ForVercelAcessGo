import React from 'react';
import AccessGoForm from '@/components/Organism/AccesForm';
import Navbar from '@/components/Navbar';

const AccessInfo = () => {
  return (
    <div>
      <Navbar/>
    <div className='flex flex-col items-center md:justify-start mt-3 h-screen bg-white'>
      <AccessGoForm />
    </div>
    </div>
  );
}

export default AccessInfo;
