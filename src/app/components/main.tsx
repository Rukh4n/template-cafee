'use client'
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Coffee, Bean, Heart, Utensils } from "lucide-react"

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <main className="bg-[#FAF9F6] text-[#3E2723]">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F3E5AB] to-[#FAF9F6] pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-16 relative">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#6F4E37]">
              Kedai Kopi bernuansa latte dengan rasa yang memeluk hangat
            </h1>
            <p className="text-[#5C4033] mb-6">
              Nikmati racikan kopi spesialti, suasana nyaman, dan pelayanan ramah. Tempat terbaik untuk memulai hari atau melepas penat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-lg bg-[#3E2723] text-[#FAF9F6] text-lg font-medium hover:bg-[#2E1C17] transition-colors">
                Coba Signature Latte
              </button>
              <a
                href="#menu"
                className="px-6 py-3 rounded-lg bg-[#3E2723] text-[#FAF9F6] text-lg font-medium hover:bg-[#2E1C17] transition-colors text-center"
              >
                Lihat Menu
              </a>
            </div>
            <p className="text-xs text-[#5C4033] mt-3">
              Buka setiap hari 08.00–22.00
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
            <img
              src="/assets/hero-coffee.jpg"
              alt="Interior kedai kopi hangat dengan nuansa latte"
              className="w-full rounded-xl border border-[#D2B48C] shadow-lg"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section id="tentang" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          <article data-aos="zoom-in" className="border border-[#D2B48C] rounded-lg p-6 bg-[#FFFDF8] shadow-lg">
            <Coffee className="mb-3 text-[#6F4E37]" />
            <h3 className="font-semibold mb-1">Racikan Spesial</h3>
            <p className="text-sm text-[#5C4033]">
              Resep kopi khas dengan keseimbangan rasa yang pas.
            </p>
          </article>
          <article data-aos="zoom-in" data-aos-delay="200" className="border border-[#D2B48C] rounded-lg p-6 bg-[#FFFDF8] shadow-lg">
            <Bean className="mb-3 text-[#6F4E37]" />
            <h3 className="font-semibold mb-1">Biji Kopi Pilihan</h3>
            <p className="text-sm text-[#5C4033]">
              Single origin & house blend disangrai dengan cermat.
            </p>
          </article>
          <article data-aos="zoom-in" data-aos-delay="400" className="border border-[#D2B48C] rounded-lg p-6 bg-[#FFFDF8] shadow-lg">
            <Heart className="mb-3 text-[#6F4E37]" />
            <h3 className="font-semibold mb-1">Suasana Nyaman</h3>
            <p className="text-sm text-[#5C4033]">
              Ruang hangat untuk bekerja, berkumpul, atau me-time.
            </p>
          </article>
        </div>
      </section>

      <section id="menu" className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 text-[#6F4E37]">Menu Andalan</h2>
          <p className="text-[#5C4033]">
            Kopi pilihan dan teman camilan untuk momen hangatmu.
          </p>
        </div>

        <div className="space-y-10">
          {/* Kopi */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Coffee aria-hidden className="text-[#6F4E37]" />
              <h3 className="text-xl font-semibold">Kopi</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <article data-aos="flip-left" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
                <img src="/assets/menu-latte.jpg" alt="Signature latte" className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold">Signature Latte</h4>
                  <p className="text-sm text-[#5C4033]">Espresso, susu, microfoam lembut.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">Rp 28.000</span>
                    <button className="px-3 py-1 bg-[#3E2723] text-[#FAF9F6] rounded-md text-sm hover:bg-[#2E1C17] transition-colors">
                      Tambah
                    </button>
                  </div>
                </div>
              </article>
              <article data-aos="flip-left" data-aos-delay="200" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
                <img src="/assets/menu-cappuccino.jpg" alt="Cappuccino" className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold">Cappuccino</h4>
                  <p className="text-sm text-[#5C4033]">Foam tebal, taburan kakao.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">Rp 30.000</span>
                    <button className="px-3 py-1 bg-[#3E2723] text-[#FAF9F6] rounded-md text-sm hover:bg-[#2E1C17] transition-colors">
                      Tambah
                    </button>
                  </div>
                </div>
              </article>
              <article data-aos="flip-left" data-aos-delay="400" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
                <img src="/assets/menu-espresso.jpg" alt="Espresso" className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold">Double Espresso</h4>
                  <p className="text-sm text-[#5C4033]">Shot pekat untuk energi ekstra.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">Rp 24.000</span>
                    <button className="px-3 py-1 bg-[#3E2723] text-[#FAF9F6] rounded-md text-sm hover:bg-[#2E1C17] transition-colors">
                      Tambah
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Makanan */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Utensils aria-hidden className="text-[#6F4E37]" />
              <h3 className="text-xl font-semibold">Makanan</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <article data-aos="flip-right" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
                <img src="/assets/menu-croissant.jpg" alt="Croissant" className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold">Croissant</h4>
                  <p className="text-sm text-[#5C4033]">Lapisan renyah, buttery.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">Rp 22.000</span>
                    <button className="px-3 py-1 bg-[#3E2723] text-[#FAF9F6] rounded-md text-sm hover:bg-[#2E1C17] transition-colors">
                      Tambah
                    </button>
                  </div>
                </div>
              </article>
              <article data-aos="flip-right" data-aos-delay="200" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
                <img src="/assets/menu-sandwich.jpg" alt="Sandwich" className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold">Grilled Sandwich</h4>
                  <p className="text-sm text-[#5C4033]">Ham & keju, dipanggang hangat.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">Rp 32.000</span>
                    <button className="px-3 py-1 bg-[#3E2723] text-[#FAF9F6] rounded-md text-sm hover:bg-[#2E1C17] transition-colors">
                      Tambah
                    </button>
                  </div>
                </div>
              </article>
              <article data-aos="flip-right" data-aos-delay="400" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
                <img src="/assets/menu-brownie.jpg" alt="Brownie" className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold">Chocolate Brownie</h4>
                  <p className="text-sm text-[#5C4033]">Fudgy, manis seimbang.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">Rp 20.000</span>
                    <button className="px-3 py-1 bg-[#3E2723] text-[#FAF9F6] rounded-md text-sm hover:bg-[#2E1C17] transition-colors">
                      Tambah
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10" data-aos="zoom-in">
          <button className="px-6 py-3 rounded-lg bg-[#3E2723] text-[#FAF9F6] text-lg font-medium hover:bg-[#2E1C17] transition-colors">
            Pesan Sekarang
          </button>
        </div>
      </section>

      <section id="galeri" className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 text-[#6F4E37]">Lokasi & Suasana</h2>
          <p className="text-[#5C4033]">
            Lihat suasana kedai kami di siang dan malam hari, serta interior yang nyaman.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          <article data-aos="fade-up" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
            <img src="/assets/location-day.jpg" alt="Siang hari" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
              <h4 className="font-semibold">Lokasi — Siang</h4>
              <p className="text-sm text-[#5C4033]">Cahaya alami dan suasana hangat.</p>
            </div>
          </article>
          <article data-aos="fade-up" data-aos-delay="200" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
            <img src="/assets/location-night.jpg" alt="Malam hari" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
              <h4 className="font-semibold">Lokasi — Malam</h4>
              <p className="text-sm text-[#5C4033]">Lampu temaram dan vibe cozy.</p>
            </div>
          </article>
          <article data-aos="fade-up" data-aos-delay="400" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
            <img src="/assets/interior-coffee-bar.jpg" alt="Bar kopi" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
              <h4 className="font-semibold">Interior — Bar Kopi</h4>
              <p className="text-sm text-[#5C4033]">Barista meracik kopi spesialti.</p>
            </div>
          </article>
          <article data-aos="fade-up" data-aos-delay="600" className="border border-[#D2B48C] rounded-lg overflow-hidden bg-[#FFFDF8] shadow-lg">
            <img src="/assets/interior-dining.jpg" alt="Area duduk" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
              <h4 className="font-semibold">Interior — Area Duduk</h4>
              <p className="text-sm text-[#5C4033]">Nyaman untuk kerja dan ngobrol.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Main
