/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next";
import SweetAlert from "react-bootstrap-sweetalert";

function navbar() {
  const route = useRouter();
  const [user, setUser] = React.useState(null);
  const [alert, setAlert] = React.useState(null);

  React.useEffect(() => {
    if (getCookie("user")) {
      setUser(JSON.parse(getCookie("user")));
    }
  }, []);

  const sweetAlertStyle = { display: "block", marginTop: "-100px" };

  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={sweetAlertStyle}
        title="Good job!"
        onConfirm={() => this.setAlert(null)}
        onCancel={() => this.setAlert(null)}
      >
        You clicked the button!
      </SweetAlert>
    );
  };

  return (
    <>
      <nav className="flex justify-between mt-5">
        <img
          src="/img/icon_nav.svg"
          width="127px"
          height="75px"
          alt="logo"
          className="pl-[12px] md:pl-[0px]"
        />
        {user ? (
          <div className="pr-[12px] md:pr-[0px]">
            <div>
              
              <button onClick={successAlert}>
                <img
                  src={
                    user?.photo ??
                    "https://www.w3schools.com/w3images/avatar5.png"
                  }
                  width="50px"
                  className="rounded-full"
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-[10px]">
            <button
              className="btn-outline-primary rounded"
              onClick={() => route.push("/login")}
            >
              Masuk
            </button>
            <button
              className="btn-primary rounded mr-[10px] md:mr-[10px]"
              onClick={() => route.push("/register")}
            >
              Daftar
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default navbar;
