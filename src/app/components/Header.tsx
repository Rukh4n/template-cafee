import React from "react"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[#4B2E2A]/90 backdrop-blur border-b border-[#3A2320]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2">
          <span className={`${dancingScript.className} text-2xl text-[#F5E6D3]`}>
            diSoftwa Cafee
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#menu"
            className="text-sm text-[#F5E6D3] hover:text-[#D4B48C] transition-colors data-[active=true]:text-[#FFD700]"
          >
            Menu
          </a>
          <a
            href="#tentang"
            className="text-sm text-[#F5E6D3] hover:text-[#D4B48C] transition-colors data-[active=true]:text-[#FFD700]"
          >
            Tentang
          </a>
          <a
            href="#galeri"
            className="text-sm text-[#F5E6D3] hover:text-[#D4B48C] transition-colors data-[active=true]:text-[#FFD700]"
          >
            Galeri
          </a>
          <a
            href="#lokasi"
            className="text-sm text-[#F5E6D3] hover:text-[#D4B48C] transition-colors data-[active=true]:text-[#FFD700]"
          >
            Lokasi
          </a>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-[#D4B48C] text-[#2C1A17] hover:bg-[#B89672] transition-colors">
            Pesan Sekarang
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
