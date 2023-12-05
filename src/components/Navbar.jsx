import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
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
        className="md:hidden text-black px-2 py-1 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar for Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-90 z-50">
          <div className="flex flex-col items-center mt-14">
            <Link className="text-black py-2" to="/" onClick={toggleMobileMenu}>
              HOME
            </Link>
            <Link
              className="text-black py-2"
              to="/Profil"
              onClick={toggleMobileMenu}
            >
              PROFIL
            </Link>
            <Link
              className="text-black py-2"
              to="/Program Studi"
              onClick={toggleMobileMenu}
            >
              PROGRAM STUDI
            </Link>
            <Link
              className="text-black py-2"
              to="/Riset & Kegiatan"
              onClick={toggleMobileMenu}
            >
              RISET & KEGIATAN
            </Link>
            <Link
              className="text-black py-2"
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
        <Link className="text-black" to="/Profil">
          PROFIL
        </Link>
        <Link className="text-black" to="/Program Studi">
          PROGRAM STUDI
        </Link>
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
