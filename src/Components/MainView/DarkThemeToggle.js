import React,  { useState, useEffect } from "react";

const Toggle = () => {
     const [theme, setTheme] = useState("light");
     useEffect(() => {
       if (theme === "dark") {
         document.documentElement.classList.add("dark");
       } else {
         document.documentElement.classList.remove("dark");
       }
     }, [theme]);
    return theme === "dark" ? (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="theme switching"
        className="relative group flex max-w-[2.25rem] h-9 w-14 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-800 dark:before:border-gray-700 before:border before:border-gray-300 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100" >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative w-5 h-5 text-white hover:text-yellow-300 hidden duration-300 dark:inline-block group-hover:rotate-180">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      </button>
    ) : (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="theme switching"
        className="relative group flex max-w-[2.25rem] h-9 w-14 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-800 dark:before:border-gray-700 before:border before:border-gray-300 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative w-4 h-4 text-slate-500 hover:text-slate-800 duration-300 group-hover:-rotate-90 dark:hidden">
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"/>
        </svg>
      </button>
    );
};

export default Toggle;