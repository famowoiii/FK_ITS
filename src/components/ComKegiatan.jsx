import React, { useEffect, useState } from "react";

function Kegiatan() {
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
    <div className="berita wrapper flex flex-wrap min-w-full min-h-24">
      {agenda.map((items) => (
        <div key={items.id} className=" wrapper mx-7 gap-2">
          <div className="judul">{items.judul}</div>
          <div className="deskripsi">{items.deskripsi}</div>
          <div className="tanggal">{items.tanggal}</div>
        </div>
      ))}
    </div>
  );
}

export default Kegiatan;
