import React from 'react'

const Footer = () => {
  return (
    <footer
      id="lokasi"
      className="border-t bg-[#d7b899] text-[#3e2723]" // nuansa kopi latte
    >
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-hand text-base">☕ Kedai Kopi Senja</p>
        <p>Jl. Harmoni, Indonesia • Buka 08.00–22.00</p>
        <a
          href="#"
          className="hover:text-[#5d4037] transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}

export default Footer
