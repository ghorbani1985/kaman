import React from 'react';



function RightLeftGrid(props) {
  return (
    <div className="grid grid-cols-12 gap-5 items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-50 p-4 shadow-soft dark:bg-slate-500 my-8">
      <div className="col-span-12 md:col-span-6 text-center">
        <h1 className="mt-20 font-extrabold text-3xl leading-[5rem] lg:text-6xl lg:leading-[6rem]">
          {props.xlText}
        </h1>
      </div>
      <div className="col-span-12 md:col-span-6">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default RightLeftGrid