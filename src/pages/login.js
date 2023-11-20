/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios"
import { setCookie, getCookie } from "cookies-next"
import Link from "next/link"
import React from "react"

function login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [mesgError, setMesgerror] = React.useState(null);

  const handleLogin = () => {
    setLoading(true);
    axios
      .post("https://hire-job.onrender.com/v1/auth/login", {
        email,
        password,
      })
      .then((result) => {
        setCookie("token", result?.data?.data?.token, { maxAge: 60 * 6 * 24 });
        setCookie(
          "user",
          JSON.stringify(result?.data?.data?.user, { maxAge: 60 * 6 * 24 })
        );

        window.location.href = "/";
      })
      .catch((err) => {
        const { email, password } = err?.response?.data?.messages ?? {};
        setMesgerror(
          email?.message ??
            password?.message ??
            err?.response?.data?.messages ??
            "Something wrong in our app, try again latter"
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="md:cols-span-1 relative d-desktop">
        <div
          className="w-[100%] h-[100vh] bg-[#5e50a1b3] absolute"
          style={{ backdropFilter: "opacity(0.1" }}
        />
        <img
          src="/img/form_talent.jpg"
          className="w-[100%] h-[100vh] object-cover"
        />
        <div className="absolute top-10 inset-0 px-[10%]">
          <img src="/img/logo_putih.png" alt="logo" width="130px" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center px-[10%]">
          <h1 className="text-[#fff] text-[25px] md:text-[45px]">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </h1>
        </div>
      </div>
      <div className="md:cols-span-1 p-[10%] bg-[#F6F7E8] h-[155vh] md:h-[100vh] flex items-center relative">
        <div>
          <div>
            {/* desktop */}
            <h2 className="text-[32px] mb-[10px] mt-20 md:mt-0">
              Halo, Pewpeople
            </h2>
          </div>

          {/* desktop */}
          <p className="text-[18px] md:text-[18px] text-[#46505C] font-normal mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>

          {mesgError ? (
            <div className="bg-[#f8d7da] text-[#721c24] p-4 rounded-lg mb-5 w-[95%]">
              Something wrong in our app, try again latter
            </div>
          ) : null}

          <div htmlFor="email">
            <input
              id="email"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[35px]"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div htmlFor="password">
            <input
              id="password"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED]"
              placeholder="Password"
              type="password"
              onChange={(a) => setPassword(a.target.value)}
            />
          </div>

          <Link href="#">
            <p className="text-right block mr-[5%] mt-[20px]">
              Lupa kata sandi
            </p>
          </Link>

          <button
            className="w-[95%] p-3 rounded-lg bg-[#FBB017] text-[#fff] font-medium mt-[20px]"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Masuk"}
          </button>

          <p className="text-center mt-[20px]">
            Anda belum punya akun ?{" "}
            <Link href="/register">
              <span className="text-[#FBB017]">Daftar disini</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({req, res}) {
  const user = getCookie("user", {req, res})
  const token = getCookie("token", {req, res})

  if(user && token) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }

  return {
    props: {
      
    },
    
  };
}

export default login;
