import React from 'react'
import title from "../Hooks/useTitle";
import LogoWhite from '../Assets/Images/Png/logo-white.png';
import PhoneIcon from "../Assets/Images/Svg/phoneIcon.svg";
import MobileIcon from "../Assets/Images/Svg/mobileIcon.svg";
import EnvelopeIcon from "../Assets/Images/Svg/envelopeIcon.svg";
import WebIcon from "../Assets/Images/Svg/webIcon.svg";
import Contact from '../Components/MainView/Contact';
function ContactUS() {
    title("تماس با ما | کمان");
  return (
    <div className="container my-24">
      <div className="w-full flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-blue-50 p-4 shadow-soft rounded-lg dark:bg-slate-500 dark:from-slate-800 dark:via-slate-500 dark:to-slate-800">
        <div className="bg-mainColor relative w-full perfectCenter rounded-tr-lg rounded-tl-lg">
          <img
            src={LogoWhite}
            alt="کمان"
            className="object-fill w-32 h-24 mt-4 mb-8 md:mb-16"
          />
          <p className="w-4/5 md:w-3/5 rounded-full p-2 md:p-4 absolute right-auto left-auto -bottom-4 md:-bottom-8 bg-[#c74647] text-white font-extrabold text-xs md:text-2xl text-center">
            راهکارهای هوشمندی دیجیتال
          </p>
        </div>
        <div className="bg-white p-4 w-full rounded-br-lg rounded-bl-lg">  
        
         <Contact
              contactRightIcon={PhoneIcon}
              rightText=" 013-91011002"
              leftText="10007412"
              contactLeftIcon={MobileIcon}
            />
            <Contact
              contactRightIcon={EnvelopeIcon}
              rightText="info@ Kaman.agency"
              leftText="www.Kaman.Agency"
              contactLeftIcon={WebIcon}
            /> 
            <p className='perfectCenter text-mainColor font-extrabold md:text-xl'>شهرباران - شهر یاران - جنب پارک مشکات - ساختمان سرو - طبقه سوم</p>
          </div>
      </div>
    </div>
  );
}

export default ContactUS;