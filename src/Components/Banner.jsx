import React, { useContext } from 'react';
import MyContext from '../utils/MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Banner() {
  const { addCoin } = useContext(MyContext);

  const notify = () => {
    addCoin();
    return toast.success("Credit Added to your Account!");
  };

  return (
    <>
      {/* ToastContainer positioned at the top-center */}
      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <div className='flex flex-col justify-center items-center gap-6 border-2 my-8 py-12 rounded-xl bg-black bg-[url("banner_bg.png")] bg-cover bg-center w-full sm:px-2 md:px-2'>
        <div className=' flex justify-center'>
          <img className='w-40' src="banner-main.png" alt="" />
        </div>
        <div className='flex flex-col justify-start items-center gap-6'>
          <h1 className='text-center text-xl md:text-3xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='text-white text-center'>Beyond Boundaries Beyond Limits</p>
          <div className='p-2 border-2 border-rose-400 rounded-2xl'>
            <button 
              onClick={notify} 
              className='btn bg-gradient-to-r from-rose-400  to-yellow-400 hover:from-yellow-400 hover:to-rose-400 text-black rounded-xl  border-none text-bold'>
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
