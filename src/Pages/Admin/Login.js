import React from 'react';
import bgImage from '../../Assets/Images/Png/LoginBG.png';
import Logo from '../../Assets/Images/Png/logo.png';
const Login = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="absolute w-screen h-screen bg-cover bg-center blur-sm"
      ></div>
      <div className="perfectCenter h-full">
        <main className="w-full max-w-md block mr-auto ml-auto box-border z-10 p-2">
          <div className="bg-white p-10 rounded-md flex flex-col items-center">
            <img src={Logo} alt="سکان جدید" />
            <h1 className="font-medium text-lg my-3"> ورود به حساب کاربری </h1>
            <form className="w-full">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_userName"
                  id="floating_userName"
                  className="block w-full text-sm text-slate-900 bg-transparent border-2  border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_userName"
                  className="bg-white px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 right-2 origin-[0] peer-focus:right-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  نام کاربری*
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block w-full text-sm text-slate-900 bg-transparent border-2  border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="bg-white px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 right-2 z-10 origin-[0] peer-focus:right-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  کلمه عبور*
                </label>
              </div>
              <button type="submit" className="">
                ورود
              </button>
              <div className="perfectCenter my-4">
                <select className="border-2 border-slate-300 border-solid px-3 py-1 rounded-md">
                  <option>فارسی</option>
                  <option>English</option>
                  <option>عربي</option>
                </select>
              </div>
            </form>
            <p className="text-slate-400 my-2">کپی‌رایت © Sokan ۱۴۰۱</p>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;