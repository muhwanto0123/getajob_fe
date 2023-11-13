import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Peworld</title>
      </Head>
      <main id="homePage">
        {/* Navbar */}
        <header className="container mx-auto">
          <Navbar />

          <section className="grid grid-cols-1 md:grid-cols-2 items-center mt-[115px]">
            <div className="place-content-center">
              <h1 className="px-[20px] mb-[20px] md:px-[0px] md:mb-[20px] text-[30px] md:text-[45px] text-center md:text-left">
                Talenta terbaik negeri <br />
                untuk perubahan revolusi 4.0
              </h1>
              <p className="mb-[30px] text-center md:text-left">
                The world is increasingly advanced, <br />
                and todays technology requires talent.
              </p>
              <div className="flex justify-center md:justify-between">
                <button className="btn-primary btn-lg rounded">
                  Mulai Sekarang
                </button>
              </div>
            </div>
            <img
              src="/img/a1.png"
              width="575px"
              height="575px"
              alt="banner"
              className="order-first md:order-last mb-[20px] md:mb-[0px]"
            />
          </section>
        </header>
        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[150px]">
            <img src="/img/a2.png" width="450px" height="450px" alt="banner" />
            <div className="mt-[20px]">
              <h2 className="mb-[30px]">
                Kenapa harus mencari tallent <br /> di peworld
              </h2>
              {[
                "Karena kami memberikan kemudahan.",
                "Karena kami memberikan lumayan kemudahan.",
                "Karena kami memberikan cukup kemudahan.",
                "Karena kami memberikan banyak kemudahan.",
              ]?.map((item, key) => (
                <div
                  className="flex align-center gap-[10px] mb-[20px]"
                  key={key}
                >
                  <img src="/img/check1.svg" alt="icon" />
                  <p className="text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[150px]">
            <div className="mt-[20px]">
              <h2 className="mb-[10px]">Skill Tallent</h2>
              <p className="mb-[30px]">
                The world is increasingly advanced, <br />
                and todays technology requires talent
              </p>
              <div className="grid grid-cols-2 mt-[45px]">
                <div>
                  {["Java", "Kotlin", "PHP", "Java Script"]?.map(
                    (item, key) => (
                      <div
                        className="flex align-center gap-[10px] mb-[20px]"
                        key={key}
                      >
                        <img src="/img/check2.svg" alt="icon" />
                        <p className="text-muted">{item}</p>
                      </div>
                    )
                  )}
                </div>
                <div>
                  {["Golang", "C++", "Ruby", "10+ Bahasa Lainnya"]?.map(
                    (item, key) => (
                      <div
                        className="flex align-center gap-[10px] mb-[20px]"
                        key={key}
                      >
                        <img src="/img/check2.svg" alt="icon" />
                        <p className="text-muted">{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <img
              src="/img/a2.png"
              width="450px"
              height="450px"
              alt="banner"
              className="order-first md:order-last"
            />
          </div>
        </section>

        <section className="container mx-auto flex justify-center my-[150px]">
          <div className="cta-rounded justify-between grid grid-cols-1 md:flex items-center bg-primary w-full md:w-[85%] h-[220px] px-[40px] mx-[12px] md:mx-[0px]">
            <h2 className="text-[#fff] text-center md:text-left">
              Looking for talent ? <br />
              we can help
            </h2>
            <button className="btn-white btn-lg rounded">Mulai Sekarang</button>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
