/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

function tallentList(parameter) {
  const router = useRouter();

  const [listData, setListData] = React.useState(parameter?.data?.slice(0, 4));

  const [currentPage, setCurrentPage] = React.useState(
    parseInt(router?.query?.page ?? 1)
  );

  const countData = Math.round(parameter?.data?.length / 4);

  const [searchBar, setSearchBar] = React.useState("");

  const handlePagination = (nextPage) => {
    setCurrentPage(nextPage);

    router.push(`/list-talent?page=${nextPage}`)

    if (nextPage > 1) {
      setListData(parameter?.data?.slice(4 * (nextPage - 1), 4 * nextPage));
    } else {
      setListData(parameter?.data?.slice(0, 4));
    }
  }

  


  return (
    <>
      <Head>
        <title>Top Job | Talent</title>
      </Head>
      <header className="container mx-auto pb-3">
        <Navbar />
      </header>

      {/* subheader */}
      <section className="bg-primary">
        <div className="container mx-auto py-[10px]">
          <h1 className="text-[28px] text-[#fff] pl-[12px] md:pl-[0px]">
            Top Talent
          </h1>
        </div>
      </section>
      <main className="min-h-[50vh] bg-[#F6F7F8] pt-[45px]">
        {/* search bar */}
        <div className=" container mx-auto">
          <div className="flex justify-between p-[15px] bg-[#fff] gap-[20px] drop-shadow-xl rounded-lg mx-[15px] md:mx-[0px]">
            <input
              placeholder="search for any talent name"
              className="w-full"
              onChange={(item) => setSearchBar(item.target.value)}
            />
            <button
              className="btn-primary rounded-lg"
            >
              Search
            </button>
          </div>
          {/* content of talent */}
          <div className="p-[25px] bg-[#fff] drop-shadow-xl rounded-lg my-[60px] mx-[15px] md:mx-[0px]">
            {listData.filter((item) => (item.fullname.toLowerCase().includes(searchBar))).map((item, key) => (
              <div
                className={`grid md:grid-cols-5 gap-[50px] items-center ${
                  key === listData.length - 1
                    ? ""
                    : "border-b-2 pb-[30px] mb-[30px]"
                }`}
                key={key}
              >
                <div className="md:col-span-4 flex gap-[35px]">
                  <img
                    src={item?.photo}
                    alt="profile"
                    className="rounded-full h-[100px] md:w-[100px] w-[100px]"
                  />

                  <div>
                    <h4>{item?.fullname}</h4>
                    <p className="text-[#9EA0A5] text-[14px] mt-[2px]">
                      {item?.job}
                    </p>
                    <div className="flex gap-[10px] mt-[2px]">
                      <img src="/img/icon_address.svg" />
                      <p className="text-[#9EA0A5] text-[14px]">
                        {item?.address}
                      </p>
                    </div>
                    <div className="flex gap-[10px] mt-[10px] ">
                      {item?.skills.map((item, key) => (
                        <button
                          className="bg-[#FBB01799] border-2 border-[#FBB017] md:py-1 md:px-5  rounded"
                          key={key}
                        >
                          <span className="text-[#fff] text-[14px] text-center">
                            {item}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="container flex justify-center block">
                  <button
                    className="btn-primary btn-lg rounded-lg flex-auto w-screen w-[10px] md:w-[30px]"
                    onClick={() =>
                      router.push(`/list-talent/detail/${item?.id}`)
                    }
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* end of content talent */}

          {/* pagination */}
          <div className="flex justify-center gap-[10px] pb-[40px]">
            <button className="bg-[#fff] border-[#E2E5ED] w-[40px] h-[40px] rounded flex justify-center items-center">
              <img src="/img/arrow_kiri.svg" />
            </button>
            {[...new Array(countData)].map((item, key) => {
              const increment = ++key;
              return (
                <button
                  className={`w-[40px] h-[40px] rounded flex justify-center items-center ${
                    increment === currentPage
                      ? "bg-[#5E50A1] text-[#fff] text-[18px]"
                      : "bg-[#fff] border-2 border-[#E2E5ED] text-[#9EA0A5] text-[18px]"
                  }`}
                  key={increment}
                  onClick={() => handlePagination(increment)}
                >
                  <p>{increment}</p>
                </button>
              );
            })}
            <button className="bg-[#fff] border-[#E2E5ED] w-[40px] h-[40px] rounded flex justify-center items-center">
              <img src="/img/arrow_kanan.svg" />
            </button>
          </div>
          {/* end pagination */}
        </div>
        {/* end of search bar */}
      </main>
      <Footer />
    </>
  );
}

// merubah halaman menjadi berjalan di ssr
export async function getServerSideProps() {
  try {
    const request = await axios.get("https://getajob-fe.vercel.app/api/user_list");
    return {
      props: request.data,
    }
  } catch (error) {
    return {
      props: {
        data: []
      },
    }
  }
}

export default tallentList;
