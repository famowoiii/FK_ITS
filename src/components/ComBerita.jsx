import React, { useState, useEffect } from "react";

function Berita() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/data/dummy.json");
        const data = await response.json();
        const latestNews = data.slice(0, 3);
        setBerita(latestNews);
      } catch (error) {
        console.error("Error fetch API berita:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="  beritawrapper justify-center flex flex-col min-w-full min-h-24">
      {berita.map((item) => (
        <div key={item.id} className="wrapper justify-center mx-7 gap-2">
          <div className="title">{item.title}</div>
          <img src={item.img} alt="" />
          <div className="description">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Berita;
