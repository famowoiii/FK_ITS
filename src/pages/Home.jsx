import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-0 ">
      <div className="w-full  h-96 items-center justify-center bg-cover bg-center bg-gedung ">
        <div className="papan absolute px-4 pb-5 translate-y-72 text-white sm:translate-x-0 md:translate-x-64 text-3xl p-1 font-bold bg-slate-600 z-10 bg-opacity-70 max-w-fit h-18 justify-center items-center">
          <p>FACULTY OF</p>
          <p>MEDICINE AND HEALTH</p>
        </div>
      </div>
      <div>
        <div className="highlight"></div>
        <div className="berita"></div>
      </div>
    </div>
  );
}

export default Home;
