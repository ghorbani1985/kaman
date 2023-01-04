import React, { useState } from 'react'
import MachineLearningIcon from '../../Assets/Images/Svg/MachineLearningIcon.svg';
import CustomerSupportIcon from "../../Assets/Images/Svg/CustomerSupportIcon.svg";
import DataScienceIcon from "../../Assets/Images/Svg/DataScienceIcon.svg";
function Card(props) {
    const  kamanCardItems = [
        {
          id: 1,
          topIcon: MachineLearningIcon,
          title: "یادگیری ماشین",
          body: "بینش هوشمند نویز داده را برای برابری بررسی کیفیت تمایز رقابتی تبدیل کنید.",
        },
        {
          id: 2,
          topIcon: CustomerSupportIcon,
          title: "پشتیبانی مشتری",
          body: "برای بررسی کیفیت تمایز رقابتی، نویز داده ها را به بینش های هوشمند تبدیل کنید.",
        },
        {
          id: 3,
          topIcon: DataScienceIcon,
          title: "علم داده",
          body: "بینش هوشمند نویز داده را برای برابری بررسی کیفیت تمایز رقابتی تبدیل کنید.",
        },
      ]
  return (
    <div className="grid grid-cols-12 gap-5 my-4">
      {kamanCardItems.map((kamanCardItems) => (
        <div key={kamanCardItems.id} className="bg-stone-100 p-2 rounded-lg col-span-12 md:col-span-4 shadow-soft">
          <p className='my-4'>
            <img src={kamanCardItems.topIcon} alt={kamanCardItems.title} />
          </p>
          <h2 className='font-extrabold'>{kamanCardItems.title}</h2>
          <p>{kamanCardItems.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;