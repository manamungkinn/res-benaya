"use client";
import React from "react";
import { useState } from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Link from "next/link";

const ServiceList = () => {
  const hospitalServices = [
    { id: 1, name: "Perawatan Kesehatan Umum", price: "Gratis", desc: "Layanan konsultasi dan pemeriksaan kesehatan umum oleh dokter profesional." },
    { id: 2, name: "Perawatan Gigi", price: "Rp 200.000", desc: "Perawatan gigi seperti pembersihan gigi, tambal gigi, dan perawatan lainnya." },
    { id: 3, name: "Rawat Inap", price: "Rp 1.500.000/malam", desc: "Layanan rawat inap dengan fasilitas lengkap selama pasien menjalani perawatan." },
    { id: 4, name: "Fisioterapi", price: "Rp 300.000/jam", desc: "Layanan terapi fisik untuk pemulihan dan perawatan kondisi fisik pasien." },
    { id: 5, name: "Laboratorium", price: "Bervariasi", desc: "Pemeriksaan lab seperti tes darah, urin, dan lain-lain sesuai kebutuhan pasien." },
    { id: 6, name: "Rehabilitasi Medik", price: "Rp 1.000.000/jam", desc: "Layanan rehabilitasi medik untuk pemulihan pasca operasi atau cedera." },
  ];

  return (
    <div className="p-6 bg-base-200">
      <h2 className="md:text-2xl text-xl font-bold text-textColor-primary text-center mb-6">Layanan Rumah Sakit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitalServices.map((service) => (
          <div key={service.id} className="card bg-white shadow-lg p-4 rounded-md">
            <h3 className="md:text-xl text-lg font-semibold text-textColor-primary">{service.name}</h3>
            <p className="text-base text-textColor-secondary">{service.desc}</p>
            <p className="text-lg font-bold mt-2 text-textColor-primary">{service.price}</p>
            <Link href={"https://api.whatsapp.com/send?phone=6282215647042"} className="btn bg-main-primary hover:bg-main-accent">
              Pesan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
