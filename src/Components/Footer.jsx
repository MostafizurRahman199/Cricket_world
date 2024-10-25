import React from "react";

export default function Footer() {

const style ={
    bg_white:{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
   
}

  return (
  <div className="bg-[#06091A] ">
     
     <div  className="w-10/12 mx-auto rounded-2xl p-4 border-2 relative -top-28 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)'}}>
      <div >
        <footer className="footer footer-center bg-base-200 text-base-content p-2 sm:p-4  md:p-10 rounded-2xl bg-[url('banner_bg.png')] bg-cover bg-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text-2xl font-bold">Subscribe to our Newsletter</h1>
            <p>Get the latest updates and news right in your inbox!</p>
          </div>

          <div className="md:flex justify-center items-center ">
          <input type="text" placeholder="Enter your Email." className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-primary join-item  border-none bg-gradient-to-r from-rose-400  to-yellow-400 text-black" style={{ boxShadow: 'inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)'}}>Subscribe</button>
          </div>
          
        </footer>
      </div>
     </div>

    <div className="flex flex-col justify-center items-center gap-8  p-4">
        <div className="flex justify-center items-center">
            <img className="w-24 h-24" src="logo-footer.png" alt="" />
        </div>
        <div className="w-full flex justify-center mx-auto ">
        <footer className="w-full footer bg-[#06091A] text-white  sm:p-4 md:p-10 flex flex-wrap justify-items-center  md:flex justify-around">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Branding</a>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Design</a>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Marketing</a>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title" style={{color:'rgba(255, 255, 255, 0.49)'}}>Company</h6>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>About us</a>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Contact</a>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Jobs</a>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title" style={{color:'rgba(255, 255, 255, 0.49)'}}>Legal</h6>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Terms of use</a>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Privacy policy</a>
                        <a className="link link-hover" style={{color:'rgba(255, 255, 255, 0.49)'}}>Cookie policy</a>
                    </nav>
                    <form className="">
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control ">
                        <label className="label">
                            <span className="label-text text-white">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="space-y-4 md:space-y-0 md:flex justify-center items-center gap-4">

                                <input type="text" placeholder="Enter your Email." className="w-5/6 input input-bordered  max-w-xs text-black" />

                                        <button className="btn btn-primary join-item  border-none bg-gradient-to-r from-rose-400  to-yellow-400 text-black" style={{ boxShadow: 'inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)'}}>Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
        </footer>
        </div>
      <div className="w-full bg-[#06091A] flex justify-center items-center  text-white   py-8 " style={{
   borderTop: '1px solid rgba(255, 255, 255, 0.15)',
}}>
            <p style={{color:'rgba(255, 255, 255, 0.49)'}}> @2024 Your Company All Rights Reserved.</p>
      </div>
    </div>

  </div>
  );
}
