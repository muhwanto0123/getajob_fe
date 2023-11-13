import React from "react";

function footer() {
  return (
    <>
      <footer className="bg-primary py-[50px]">
        <div className="container mx-auto ">
          <img
            src="/img/logo_putih.png"
            width="178px"
            height="50px"
            alt="logo"
            className="mb-[20px] ml-[55px] md:ml-[0px]"
          />
          <p className="text-[#fff] mb-[50px] text-center md:text-left">
            The world is increasingly advanced, <br />
            and todays technology requires talent.
          </p>

          <hr />
          <div className="md:flex md:justify-between mt-[20px]">
            <p className="text-[#fff] text-center md:text-left">2020 Peworld. All right reserved</p>
            <div className="md:flex gap-[30px]">
              <p className="text-[#fff] text-center md:text-left">Telepon</p>
              <p className="text-[#fff] text-center md:text-left">Email</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
