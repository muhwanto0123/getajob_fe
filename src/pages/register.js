/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Link from "next/link";
import React from "react";


function register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [job_title, setJobtitle] = React.useState("");

  const [isLoading, setLoading] = React.useState(false);
  const [mesgError, setMesgerror] = React.useState(null);

  const handleRegister = () => {
    setLoading(true);
    axios
      .post("https://hire-job.onrender.com/v1/auth/register", {
        email,
        password,
        fullname,
        company,
        job_title,
        phone,
      })
      .then(() => {
        // setCookie("token", result?.data?.data?.token, { maxAge: 60 * 6 * 24 });
        // setCookie(
        //   "user",
        //   JSON.stringify(result?.data?.data?.user, { maxAge: 60 * 6 * 24 })
        // );
        window.location.href = "/login";
      })
      .catch((err) => {
        const { email, password, fullname, company, job_title, phone } = err?.response?.data?.messages ?? {};
        // const pesan = err?.response?.data?.message ?? {}
        setMesgerror(
            email?.message ??
            password?.message ??
            fullname?.message ??
            company?.message ??
            job_title?.message ??
            phone?.message ??
            err?.response?.data?.messages ??
            "Something wrong in our app, try again latter"
        );
        // console.log(err)
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="md:cols-span-1 relative d-mobile d-desktop">
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
      <div className="md:cols-span-1 p-[10%] bg-[#F6F7E8] h-[100vh] relative overflow-y-auto">
        <div>
          <h2 className="text-[32px] mb-[10px]">Halo, Pewpeople</h2>

          <p className="text-[18px] text-[#46505C] font-normal mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>

          {mesgError ? (
            <div className="bg-[#f8d7da] text-[#721c24] p-4 rounded-lg mb-5 w-[95%]">
              Something wrong in our app, try again latter
            </div>
          ) : null}

          <div htmlFor="name">
            <input
              id="name"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
              placeholder="Nama Lengkap"
              type="text"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div htmlFor="email">
            <input
              id="email"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
              placeholder="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div htmlFor="compeny">
            <input
              id="compeny"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
              placeholder="Masukkan nama perusahaan"
              type="text"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div htmlFor="job">
            <input
              id="Jobs"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
              placeholder="Masukkan nama Job anda"
              type="text"
              onChange={(e) => setJobtitle(e.target.value)}
            />
          </div>
          <div htmlFor="noHp">
            <input
              id="noHp"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
              placeholder="Masukkan nomor hp/telepon"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div htmlFor="password">
            <input
              id="password"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
              placeholder="Masukkan password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div htmlFor="confirmPassword">
            <input
              id="confirmPassword"
              className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED]"
              placeholder="Silahkan konfirmasi password"
              type="password"
            />
          </div>

          <button
            className="w-[95%] p-3 rounded-lg bg-[#FBB017] text-[#fff] font-medium mt-[30px]"
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Masuk"}
          </button>

          <p className="text-center mt-[20px]">
            Anda sudah punya akun ?{" "}
            <Link href="/login">
              <span className="text-[#FBB017]">login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default register;
