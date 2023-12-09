import React from "react";
import Berita from "../components/ComBerita";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [agenda, setAgenda] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/Agenda.json");
        const data = await response.json();
        const dataTerbaru = data.slice(0, 3);
        console.log(data);
        console.log(dataTerbaru);
        setAgenda(dataTerbaru);
      } catch (error) {
        console.log(`Sistem mengalami kesalahan: ${error}`);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="pt-0  ">
      <div className="sm:w-full  md:w-full h-96 items-center justify-center bg-cover bg-center bg-gedung ">
        <div className="papan z-30 absolute px-4 pb-5 translate-y-72 text-white sm:translate-x-0 md:translate-x-64 text-3xl p-1 font-bold bg-slate-600 z-10 bg-opacity-70 max-w-fit h-18 justify-center items-center">
          <p>FACULTY OF</p>
          <p>MEDICINE AND HEALTH</p>
        </div>
      </div>
      <div className=" flex-col justify-center  gap-10">
        <div className="flex  flex-col">
          <div className="py-9 gap-3 justify-center flex flex-row ">
            <div className="text-white font-semibold p-2 text-sm flex flex-shrink-0 bg-blue-900">
              HIGHLIGHT
            </div>
            <div className="flex flex-shrink sm:w-1/5 sm:mx-1  transition-all sm:h-1 md:w-7/12 sm:h-1 translate-y-6  bg-blue-900"></div>
          </div>

          <div className="beritawrapper md:mx-18 sm:mx-0 flex flex-wrap gap-3 justify-center   min-w-full min-h-24">
            {agenda.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundImage:
                    'url("https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                  minHeight: "150px",
                }}
                className=" wrapper flex items-baseline justify-self-start flex-col mx-2 gap-2"
              >
                <div className="judul">{item.author}</div>

                <div className="deskripsi">{item.download_url}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 sm:grid-cols-1 flex flex-col md:flex-row justify-center mx-52">
          <div className=" flex flex-col justify-start">
            <div className="sm:justify-center flex flex-row gap-3">
              <div className="sm:translate-x-11 md:translate-x-0 text-white font-semibold bg-blue-900 w-fit p-2">
                BERITA
              </div>
              <div className="text-white  bg-blue-900 md:w-72  transition-all sm:w-0 h-1 translate-y-6"></div>
            </div>
            <div className=" ">
              <Berita />
            </div>
          </div>
          <div className=" flex justify-start">
            <div className="flex-col  ">
              <div className="flex flex-row gap-3">
                <div className="text-white  bg-blue-900 p-2 w-fit font-semibold">
                  AGENDA
                </div>
                <div className=" text-white  bg-blue-900 md:w-72  transition-all sm:w-0 h-1 translate-y-6"></div>
              </div>
              <div className="flex-col">ini adalah konten</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
