import React from 'react'
import { Link } from 'react-router-dom';
import homeLeft from '../Assets/Images/Svg/homeLeft.svg';
import RightLeftGrid from '../Components/MainView/RightLeftGrid';
import title from '../Hooks/useTitle';
function Home() {
  title("هوشمند سازی کسب و کار | کمان")
  return (
    <>
      <main className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 order-2 perfectCenter w-full h-full lg:col-span-7 shadow-[6px_73px_62px_rgb(0,12,119,3%)] rounded-full">
            <img
              src={homeLeft}
              alt="homeLeft"
              className="md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] object-fill"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col items-center text-center p-2 ">
            <h1 className="mt-20 font-extrabold text-3xl leading-[5rem] lg:text-6xl lg:leading-[6rem]">
              راه حل هوش مصنوعی مشتری برای
              <p className="text-secondColor"> تجزیه و تحلیل </p>
              کاربر
            </h1>
            <p className="my-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
            <Link
              to="/AboutUS"
              className="bg-blue-200 px-12 py-3 rounded-lg text-mainColor"
            >
              <p>بیشتر بدانید</p>
            </Link>
          </div>
        </div>
        <RightLeftGrid
          xlText="خدماتی که ما با کیفیت ارائه می کنیم"
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        />
      </main>
    </>
  );
}

export default Home