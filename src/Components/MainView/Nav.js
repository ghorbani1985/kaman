import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/Png/logo.png";
import styled from "styled-components";
const DIV = styled.div`
  div {
    transform-origin: -3px;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.open ? "translateX(-100%)" : "translateX(0)")};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const NAV = styled.nav`
  @media (max-width: 640px) {
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  }
`;
function Nav() {
      const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-1 flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
      <div className="w-full relative flex justify-between md:w-max md:px-0">
        <DIV
          open={open}
          onClick={() => setOpen(!open)}
          className="flex flex-col relative items-center transition-all ease-linear duration-500 ml-2 z-50 md:hidden max-h-10"
        >
          <div
            id="line"
            className="m-auto h-0.5 w-6 rounded bg-mainColor dark:bg-gray-300 transition ease-linear duration-300"
          ></div>
          <div
            id="line2"
            className="m-auto my-2 h-0.5 w-6 rounded bg-mainColor dark:bg-gray-300 transition ease-linear duration-300"
          ></div>
          <div
            id="line3"
            className="m-auto h-0.5 w-6 rounded bg-mainColor dark:bg-gray-300 transition ease-linear duration-300"
          ></div>
        </DIV>
      </div>
      <NAV
        open={open}
        className="flex z-40 flex-col md:flex-row justify-between 
                    items-center gap-y-4 p-6 dark:bg-slate-700 dark:md:bg-transparent bg-white dark:text-gray-300
                    md:gap-y-4 md:p-0 
                    md:bg-transparent md:w-full fixed md:static top-0 right-0 transition-all ease-linear duration-500 peer-checked:right-0 max-w-sm h-full 
                   md:right-0 md:h-auto w-4/5 md:max-w-none lg:relative lg:first-letter:top-0"
      >
        <div className="flex md:hidden pb-5">
          <Link to="#" aria-label="logo">
            <div className="perfectCenter dark:bg-slate-300 dark:rounded-full dark:w-36 dark:h-36">
              <img src={Logo} alt="logo" className="w-44 h-32 ml-2 object-fill" />
            </div>
          </Link>
        </div>

        <div className="flex flex-1 w-full h-full md:h-auto">
          <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
            <li>
              <Link to="/" className="block md:px-1 lg:px-2 xl:px-3 group">
                <div
                  className="relative
                      before:absolute before:-inset-1 before:w-full before:h-0.5 before:origin-right before:mx-auto before:mt-auto before:rounded-full before:bg-mainColor before:transition before:scale-x-0 group-hover:before:scale-x-100"
                >
                  <span className="text-lg font-bold md:text-xs md:font-normal lg:text-sm lg:font-bold">
                    صفحه اصلی
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/IntroFeatures" className="block md:px-1 lg:px-2 xl:px-3 group">
                <div
                  className="relative
                       before:absolute before:-inset-1 before:w-full before:h-0.5 before:origin-right before:mx-auto before:mt-auto before:rounded-full before:bg-mainColor before:transition before:scale-x-0 group-hover:before:scale-x-100 group-visited:bg-mainColor"
                >
                  <span className="transition text-lg font-bold md:text-xs md:font-normal lg:text-sm lg:font-bold group-hover:text-mainColor dark:group-hover:text-gray-200">
                    معرفی امکانات
                  </span>
                </div>
              </Link>
              <ul>
                <li></li>
              </ul>
            </li>
            <li>
              <Link to="/AboutUS" className="block md:px-1 lg:px-2 xl:px-3 group">
                <div
                  className="relative
                           before:absolute before:-inset-1 before:w-full before:h-0.5 before:origin-right before:mx-auto before:mt-auto before:rounded-full before:bg-mainColor before:transition before:scale-x-0 group-hover:before:scale-x-100"
                >
                  <span className="transition text-lg font-bold md:text-xs md:font-normal lg:text-sm lg:font-bold group-hover:text-mainColor dark:group-hover:text-gray-200">
                    درباره ما
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/ContactUS" className="block md:px-1 lg:px-2 xl:px-3 group">
                <div
                  className="relative
                                                    before:absolute before:-inset-1 before:w-full before:h-0.5 before:origin-right before:mx-auto before:mt-auto before:rounded-full before:bg-mainColor before:transition before:scale-x-0 group-hover:before:scale-x-100"
                >
                  <span className="transition text-lg font-bold md:text-xs md:font-normal lg:text-sm lg:font-bold group-hover:text-mainColor dark:group-hover:text-gray-200">
                    تماس با ما
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/FAQ" className="block md:px-1 lg:px-2 xl:px-3 group">
                <div
                  className="relative
                         before:absolute before:-inset-1 before:w-full before:h-0.5 before:origin-right before:mx-auto before:mt-auto before:rounded-full before:bg-mainColor before:transition before:scale-x-0 group-hover:before:scale-x-100"
                >
                  <span className="transition text-lg font-bold md:text-xs md:font-normal lg:text-sm lg:font-bold group-hover:text-mainColor dark:group-hover:text-gray-200">
                    سوالات متداول
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </NAV>
    </div>
  );
}

export default Nav;