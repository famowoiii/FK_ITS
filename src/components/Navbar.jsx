import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [riset, setRiset] = useState(false);
  const dropDownButtonProfile = () => {
    setDrop((prevDrop) => !prevDrop);
    setRiset(false);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const dropDownButonRiset = () => {
    setRiset((prevRiset) => !prevRiset);
    setDrop(false);
  };

  return (
    <div className="bg-white min-w-full h-14 flex justify-center gap-24 items-center font-semibold drop-shadow-xl relative z-10">
      <div className="flex items-center">
        <img
          src="src\assets\Logo ITS.png"
          alt=""
          style={{ maxWidth: "6rem", maxHeight: "5.3rem", padding: "0" }}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden text-black px-2 py-1 focus:outline-none ${
          isMobileMenuOpen ? "abosule z-50" : "static"
        }`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar for Mobile */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute h-screen inset-0 ${
            isMobileMenuOpen
              ? "w-60 z-40 translate-x-full drop-shadow-2xl duration-1000 "
              : "w-0 overflow-hidden"
          } bg-white bg-opacity-90 z-40`}
        >
          <div className="flex pl-3 pt-3 flex-col  mt-14 justify-items-start">
            <Link
              className="active:bg-blue-400 text-black py-2"
              to="/"
              onClick={toggleMobileMenu}
            >
              HOME
            </Link>

            <Link
              className="text-black py-2 active:bg-blue-400 "
              to="/Program Studi"
              onClick={toggleMobileMenu}
            >
              PROGRAM STUDI
            </Link>
            <Link
              className="text-black py-2 active:bg-blue-400"
              to="/Riset & Kegiatan"
              onClick={toggleMobileMenu}
            >
              RISET & KEGIATAN
            </Link>
            <Link
              className="text-black py-2 active:bg-blue-400 "
              to="/Pengumuman"
              onClick={toggleMobileMenu}
            >
              PENGUMUMAN
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 text-sm">
        <Link className="text-black" to="/">
          HOME
        </Link>
        <button className="hover:text-blue-900" onClick={dropDownButtonProfile}>
          PROFIL
          {drop ? "up" : "down"}
          {drop && (
            <div className=" flex flex-col bg-slate-400 w-fit absolute">
              <Link className="text-black py-2" to="/Sejarah">
                Sejarah
              </Link>
              <Link className="text-black py-2" to="/Visi&Misi">
                Visi & Misi
              </Link>
              <Link className="text-black py-2" to="/Fasilitas">
                Fasilitas
              </Link>
              <Link className="text-black py-2" to="/Struktu">
                Struktur
              </Link>
            </div>
          )}
        </button>
        <Link className="text-black" to="/Program Studi">
          PROGRAM STUDI
        </Link>
        <button className="hover:text-blue-900" onClick={dropDownButonRiset}>
          RISET & KEGIATAN
          {riset ? "up" : "down"}
          {riset && (
            <div className=" flex flex-col bg-slate-400 w-fit absolute">
              <Link className="text-black py-2" to="/Riset">
                Riset
              </Link>
              <Link className="text-black py-2" to="/Kegiatan">
                Kegiatan
              </Link>
              <Link className="text-black py-2" to="/Berita">
                Berita
              </Link>
            </div>
          )}
        </button>
        <Link className="text-black" to="/Riset & Kegiatan">
          RISET & KEGIATAN
        </Link>
        <Link className="text-black" to="/Pengumuman">
          PENGUMUMAN
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
