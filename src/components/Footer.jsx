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
            className="mb-[20px]"
          />
          <p className="text-[#fff] mb-[50px]">
            The world is increasingly advanced, <br />
            and todays technology requires talent.
          </p>

          <hr />
          <div className="flex justify-between mt-[20px]">
            <p className="text-[#fff]">2020 Peworld. All right reserved</p>
            <div className="flex gap-[30px]">
              <p className="text-[#fff]">Telepon</p>
              <p className="text-[#fff]">Email</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
