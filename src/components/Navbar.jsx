import React from "react";

function navbar() {
  return (
    <>
      <nav className="flex justify-between mt-5">
        <img src="/img/icon_nav.svg" width="127px" height="75px" alt="logo" className="pl-[12px] md:pl-[0px]"/>
        <div className="flex gap-[10px]">
          <button className="btn-outline-primary rounded ">Masuk</button>
          <button className="btn-primary rounded mr-[10px] md:mr-[10px]">Daftar</button>
        </div>
      </nav>
    </>
  );
}

export default navbar;
