import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import axios from "axios";

function Detail(parameterProfile) {
  const { data } = parameterProfile;
  return (
    <>
      <Head>
        <title>Top Job | Talent</title>
      </Head>
      <header className="container mx-auto pb-3">
        <Navbar />
      </header>

      <main className="min-h-[50vh] bg-[#F6F7F8] pt-[45px]">
        <div className="container mx-auto">
          <div className="bg-[#ffff] drop-shadow-lg rounded-s-lg">
            <div className="bg-[#5e50a1] h-[200px] rounded-t-lg" />
            <div className="flex justify-center mt-[-80px] mb-[30px]">
              <img
                src={data?.photo}
                alt="profile"
                className="w-[150px] h-[150px] rounded-full"
              />
            </div>
            <h1 className="text-center text-[22px]">{data?.fullname}</h1>
            <p className="text-center text-[15px]">{data?.job}</p>
            <div className="flex justify-center gap-[10px] mt-[5px] mb-[30px]">
              <img src="/img/icon_address.svg" />
              <p className="text-[#9EA0A5] text-[14px]">{data?.address}</p>
            </div>
            <div className="flex justify-center mb-[30px]">
              <div className="w-[600px]">
                <p className="text-center text-[14px]">{data?.desc}</p>
              </div>
            </div>
            <div className="flex justify-center mb-[30px]">
              <button className="btn-primary btn-lg rounded w-[300px]">
                Hire
              </button>
            </div>
            <h2 className="text-center text-[22px] mb-[15px]">Skills</h2>
            <div className="flex justify-center pb-[50px] mb-[50px]">
              <div className="w-[300px] flex justify-center flex-wrap gap-[10px]">
                {data?.skills?.map((item, key) => (
                  <div className="bg-[#FBB017] border-2 border-[#FBB017] py-1 px-5 rounded" key={key}>
                    <span className="text-[#fff] text-[12px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// merubah halaman menjadi berjalan di ssr
export async function getServerSideProps(parameter) {
  const { id } = parameter.params;
  const request = await axios.get(
    `http://localhost:3000/api/talent_list?id=${id}`
  );
  return {
    props: request.data,
  };
}

export default Detail;
