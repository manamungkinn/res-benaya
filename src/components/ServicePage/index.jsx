"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicePage = () => {
  const services = [
    { id: 1, href: "/cleaning-rumah", image: "/images/cleaningRumah.jpg", name: "Cleaning Rumah", price: "Rp 50.000/jam", desc: "Membersihkan rumah Anda secara profesional." },
    { id: 2, href: "/cleaning-kantor", image: "/images/cleaningKantor.webp", name: "Cleaning Kantor", price: "Rp 70.000/jam", desc: "Layanan pembersihan kantor dengan tenaga ahli." },
    { id: 3, href: "/cleaning-sofa", image: "/images/cleaningSofa.jpg", name: "Cuci Sofa", price: "Rp 100.000/unit", desc: "Cuci sofa Anda hingga bersih seperti baru." },
    { id: 4, href: "/service/cuci-karpet-medan", image: "/images/cleaningKarpet.webp", name: "Cuci Karpet", price: "Rp 75.000/m2", desc: "Membersihkan karpet hingga bebas dari noda dan debu." },
    { id: 5, href: "/cleaning-kaca", image: "/images/cleaningKaca.webp", name: "Cleaning Kaca Gedung", price: "Rp 150.000/jam", desc: "Layanan pembersihan kaca gedung secara aman dan efisien." },
    { id: 6, href: "cleaning-kolam-renang",image: "/images/cleaningKolam.jpg", name: "Cleaning Kolam Renang", price: "Rp 200.000/visit", desc: "Merawat dan membersihkan kolam renang Anda secara menyeluruh." },
  ];

  return (
    <div className="min-h-screen p-6">
      <header className="text-center py-6">
        <h1 className="text-4xl font-semibold text-main-primary mb-2">Mengapa Menggunakan Jasa RoyCleaner?</h1>
        <p className="text-textColor-secondary max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan kebersihan profesional untuk memenuhi kebutuhan rumah, kantor, atau properti Anda. Dengan tim ahli, kami siap memberikan hasil terbaik untuk kenyamanan Anda.
        </p>
      </header>

      <section className="mt-8 grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
        {services.map((service) => (

          <div key={service.id} className="rounded-lg flex flex-col justify-center items-center">
            <Link href={`${service.href}`} >
            <Image width={600} height={600} alt="Image" src={service.image} className="w-[300px] rounded-full h-[300px]" />
            </Link>
            <h3 className="text-xl mt-2 font-semibold text-main-primary">{service.name}</h3>
            <p className="text-textColor-secondary mt-2">{service.desc}</p>
            <p className="text-lg font-bold mt-2 text-textColor-primary">{service.price}</p>
            <Link href={`${service.href}`} className="text-main-primary mt-2 font-semibold">
              Read More
            </Link>
          </div>
        ))}
      </section>

      <footer className="text-center mt-12">
        <p className="text-textColor-secondary">Hubungi kami melalui <a href="" className="underline">WhatsApp</a> untuk mendapatkan informasi lebih lanjut atau memesan layanan.</p>
      </footer>
    </div>
  );
};

export default ServicePage;
