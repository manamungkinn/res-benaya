"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButonScrollTop from "../ButtonScrollTop";

const CuciKarpet = () => {

  
  return (
    <div className="min-h-screen p-4">
      <section className="mt-8">
        <div className="">
          <div className="flex flex-col gap-3 text-textColor-primary">
            <h1 className="text-4xl font-bold text-main-primary mb-4 text-center">Layanan Cuci Karpet di Medan</h1>
            <p>Cuci Karpet Medan : Jasa Cuci Karpet Masjid & Cuci Karpet Kantor di Medan Laundry Terdekat Express dengan Harga Murah! RoyCleaner Solusinya.</p>
            <p>Bahan pembersih ramah lingkungan dan aman untuk keluarga.</p>
            <p>Info : 081234567890.</p>
            <p>
              Jasa cuci karpet di Medan menjadi salah satu solusi mudah. Pasalnya tidak perlu lagi membuang tenaga untuk mencuci sendiri. Semua bisa dilakukan hanya dengan menelepon pihak penyedia layanan dan karpet otomatis bersih dan
              wangi.
            </p>
            <p>Layanan kami meliputi pembersihan karpet rumah, kantor, dan komersial. Dapatkan karpet Anda bersih seperti baru dengan proses yang aman dan efisien!</p>
          </div>
        </div>
        <div>
          <img src="/images/cuciKarpet.jpeg" alt="Layanan Cuci Karpet" className="rounded" />
        </div>
      </section>

      <section className="mt-8">
        <div className="">
          <div className="flex flex-col gap-3 text-textColor-primary">
            <h1 className="text-xl font-bold text-main-primary mb-4">Jasa Laundry Karpet Medan</h1>
            <p>
              Bagi Anda yang tinggal di kota Medan sekarang sudah tidak perlu bingung lagi untuk mencari jasa laundry karpet. RoyClean Medan siap menjadi asisten setia yang akan membantu membersihkan karpet dengan kualitas pelayanan
              terbaik.
            </p>
            <p>
              Siapa yang tidak mempunyai karpet di rumahnya? Minimal ada 1 buah yang disimpan untuk digunakan sewaktu-waktu, pasti punya bukan? Fungsi dari benda ini sendiri memang sangatlah penting. Namun memiliki karpet berarti juga harus
              siap untuk merawatnya.
            </p>
            <p>
              Mulai dari menjaga agar tidak terkena kotoran membandel hingga berusaha membersihkannya. Apalagi jika karpet yang Anda miliki terkena sebuah noda yang sangat sulit dihilangkan. Maka dari itu di sini, peran jasa laundry karpet
              sangat dibutuhkan.
            </p>
            <p>Berbicara mengenai penyedia jasa cleaning, tentu banyak tersedia di berbagai daerah. Begitu pula di kota Medan, puluhan penyedia layanan dapat dipilih. Namun, RoyClean berada di level yang berbeda.</p>
          </div>
        </div>
        <div>
          <img src="/images/cuciKarpet2.jpg" alt="Layanan Cuci Karpet" className="rounded" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-main-primary text-center mb-6">Paket Harga</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-main-secondary p-6 shadow-lg rounded-lg border border-main-primary text-center">
            <h3 className="text-xl font-semibold text-main-primary">Paket Reguler</h3>
            <p className="text-textColor-secondary mt-2">Pembersihan standar untuk karpet rumah.</p>
            <p className="text-lg font-bold mt-4 text-textColor-primary">Rp 75.000/m²</p>
          </div>
          <div className="card bg-main-secondary p-6 shadow-lg rounded-lg border border-main-primary text-center">
            <h3 className="text-xl font-semibold text-main-primary">Paket Premium</h3>
            <p className="text-textColor-secondary mt-2">Pembersihan mendalam dengan teknologi terbaru.</p>
            <p className="text-lg font-bold mt-4 text-textColor-primary">Rp 120.000/m²</p>
          </div>
          <div className="card bg-main-secondary p-6 shadow-lg rounded-lg border border-main-primary text-center">
            <h3 className="text-xl font-semibold text-main-primary">Paket Kantor</h3>
            <p className="text-textColor-secondary mt-2">Layanan untuk karpet kantor atau komersial.</p>
            <p className="text-lg font-bold mt-4 text-textColor-primary">Rp 100.000/m²</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-12">
        <Link href="https://api.whatsapp.com/send?phone=6282215647042" className="btn bg-main-primary text-light-one px-6 py-2 rounded-md hover:bg-main-dark">
          Pesan Sekarang
        </Link>
        <p className="mt-4 text-textColor-secondary">Hubungi kami sekarang untuk menjadwalkan layanan cuci karpet Anda!</p>
      </footer>

    </div>
  );
};

export default CuciKarpet;
