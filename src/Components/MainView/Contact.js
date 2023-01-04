import React from 'react'

function Contact(props) {
  return (
    <>
      <div className="my-8 text-[#c74647] perfectCenter">
        <div className="w-full lg:w-3/5 flex flex-col gap-y-7 md:flex-row md:justify-between">
          <section className="perfectCenter">
            <div className="bg-[#c74647] perfectCenter w-7 h-7 md:w-10 md:h-10 mx-2 p-2 rounded-full">
              <img
                src={props.contactRightIcon}
                alt="کمان"
                className="object-fill w-5 h-5 md:w-8 md:h-8"
              />
            </div>
            <p className="text-mainColor font-extrabold text-sm md:text-lg">{props.rightText}</p>
          </section>
          <section className="flex justify-center md:justify-end items-center">
            <p className="text-mainColor font-extrabold text-sm md:text-lg text-left md:text-right">{props.leftText}</p>
            <div className="bg-[#c74647] perfectCenter w-8 h-8 md:w-10 md:h-10 mx-2 p-2 rounded-full">
              <img
                src={props.contactLeftIcon}
                alt="کمان"
                className="object-fill w-5 h-5 md:w-8 md:h-8" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;