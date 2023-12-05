import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Prodi from "./pages/Prodi";
import Riset from "./pages/Riset";
import Pengumuman from "./pages/Pengumuman";
import Fasilitas from "./pages/Fasilitas";
import Berita from "./pages/Berita";
import Kegiatan from "./pages/Kegiatan";
import Sejarah from "./pages/Sejarah";
import Struktur from "./pages/Struktur";
import VisiMisi from "./pages/VisiMisi";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Di bawah adalah route utama */}
        <Route path="/" element={<Home />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Program Studi" element={<Prodi />} />
        <Route path="/Riset & Kegiatan" element={<Riset />} />
        <Route path="/Pengumuman" element={<Pengumuman />} />
        {/* di bawah adalah route dropdown */}
        <Route path="/Fasilitas" element={<Fasilitas />} />
        <Route path="/Berita" element={<Berita />} />
        <Route path="/Kegiatan" element={<Kegiatan />} />
        <Route path="/Sejarah" element={<Sejarah />} />
        <Route path="/Struktur" element={<Struktur />} />
        <Route path="/Visi & Misi" element={<VisiMisi />} />
      </Routes>
    </>
  );
}

export default App;
