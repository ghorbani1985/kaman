import React from "react";
import Logo from './Logo';
import Nav from './Nav'
import DarkTheme from './DarkThemeToggle'
const Header = () => {

    return (
      <>
        <header className="bg-white h-16 shadow-soft fixed md:overflow-hidden inset-x-0 top-0 z-30  dark:bg-slate-500 transition-[height] duration-300 lg:h-auto">
          <section className="container spaceBetween ">
              <Logo />
              <Nav />
              <div className="perfectCenter">
                <DarkTheme />
                <button className="bg-mainColor mr-2 hover:bg-sky-500 transition-all ease-linear duration-500 text-white px-3 py-1 rounded-lg">
                  ورود به حساب کاربری
                </button>
              </div>
          </section>
        </header>
      </>
    );
}

export default Header;