import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import { getCookie } from "cookies-next";

function ContactPage(contactParamater) {
  const { data } = contactParamater;
  const token = getCookie("token");
  const [subject, setSubject] = React.useState("");
  const [senderfullname, setSenderFullname] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [sucessMesg, setSucessmesg] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const handleSend = () => {
    setLoading(true);
    axios
      .post(
        "https://hire-job.onrender.com/v1/contact",
        {
          subject: subject,
          description: description,
          sender: senderfullname,
          toName: data?.fullname,
          to: data?.sosmed?.email
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => setSucessmesg("Email Success sended to user"))
      .finally(() => setLoading(false))
      
  };
  return (
    <>
      <Head>
        <title>Talent | Peworld</title>
      </Head>
      <header className="container mx-auto pb-5">
        <Navbar />
      </header>

      <main className="min-h-[60vh] bg-[#F6F7F8] pb-[40px] pt-[60px]">
        {/* search bar */}
        <div className=" container mx-auto">
          <div className="md:grid md:grid-cols-3 mx-[15px] md:mx-[0px]">
            <div className="w-[100%] h-[600px] bg-[#FFFFFF] rounded-lg drop-shadow-md">
              <div className="flex justify-center md:mt-[25px]">
                <img
                  src={data?.photo}
                  width="145px"
                  height="145px"
                  className="rounded-full mb-[15px] mt-5 md:mt-0"
                />
              </div>
              <h1 className="text-center text-[25px]">{data?.fullname}</h1>
              <p className="text-center mb-[5px]">{data?.job}</p>
              <div className="flex justify-center gap-[10px] mt-[5px] mb-[30px]">
                <img src="/img/icon_address.svg" />
                <p className="text-[#9EA0A5] text-[14px]">{data?.address}</p>
              </div>
              <p className="text-center text-[14px] w-[100%] mb-[25px] px-5">
                {data?.desc}
              </p>
              <h2 className="text-center text-[22px] mb-[15px]">Skills</h2>
              <div className="flex justify-center pb-[50px] mb-[50px]">
                <div className="w-[300px] flex justify-center flex-wrap gap-[10px]">
                  {data?.skills?.map((item, key) => (
                    <div
                      className="bg-[#FBB017] border-2 border-[#FBB017] py-1 px-5 rounded"
                      key={key}
                    >
                      <span className="text-[#fff] text-[12px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[100%] md:col-span-2 md:pr-[180px] md:pl-[50px]">
              <h2 className="text-[32px] mb-[10px] text-center md:text-left pt-5 md:pt-0">
                Halo, Pewpeople
              </h2>
              <p className="text-[18px] text-[#46505C] font-normal mb-[40px] text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>

              {sucessMesg ? (
                <div className="bg-[#d4edda] text-[#155724] p-4 rounded-lg mb-5 w-[95%]">
                  {sucessMesg}
                </div>
              ) : null}

              <label
                htmlFor="tujuan"
                className="block text-[#9EA0A5] text-[16px] mb-[5px]"
              >
                Tujuan pesan ini
              </label>
              <input
                id="tujuan"
                className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
                placeholder="Masukkan tujuan tentang pesan ini"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
              />
              <label
                htmlFor="name"
                className="block text-[#9EA0A5] text-[16px] mb-[5px]"
              >
                Nama Lengkap
              </label>
              <input
                id="name"
                className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
                placeholder="Nama Lengkap"
                type="text"
                onChange={(e) => setSenderFullname(e.target.value)}
              />

              <label
                htmlFor="deskripsi"
                className="block text-[#9EA0A5] text-[16px] mb-[5px]"
              >
                Deskripsi
              </label>

              <textarea
                id="deskripsi"
                className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[15px]"
                placeholder="Deskripsikan/jelaskan dengan detail"
                type="text"
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
              />

              <button
                className="w-[95%] p-3 rounded-lg bg-[#FBB017] text-[#fff] font-medium mt-[30px]"
                onClick={handleSend}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// merubah halaman menjadi berjalan di ssr
export async function getServerSideProps({ req, res, params }) {
  const { id } = params;
  const user = getCookie("user", { req, res });
  const token = getCookie("token", { req, res });

  const request = await axios.get(
    `http://localhost:3000/api/user_list?id=${id}`
  );

  if (!user && !token) {
    return {
      redirect: {
        permanent: false,
        destination: `/list-talent/detail/${id}`,
      },
    };
  }

  return {
    props: request.data,
  };
}

export default ContactPage;
