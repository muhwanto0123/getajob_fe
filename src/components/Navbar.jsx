import React from "react";

function navbar() {
  return (
    <>
      <nav className="flex justify-between mt-5">
        <img src="/img/icon_nav.svg" width="127px" height="75px" alt="logo" />
        <div className="flex gap-[10px]">
          <button className="btn-outline-primary rounded">Masuk</button>
          <button className="btn-primary rounded">Daftar</button>
        </div>
      </nav>
    </>
  );
}

export default navbar;
