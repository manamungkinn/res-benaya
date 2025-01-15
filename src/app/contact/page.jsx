"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import { useState } from "react";
import { FaSkating } from "react-icons/fa";

const ContactPage = () => {
  // buat delay
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbzTFOpLS5LnDcrJqvXMrJgy4uC4JhnRsNUYw-EFO33M5Jo0BhrtYS2FDwlJWtC8CTn3/exec";
    const form = document.forms["submit-to-google-sheet"];
    console.log(form);
    try {
      setLoading(true);
      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      })
        .then((response) => {
          if (response.ok) {
            form.reset(); // Reset form jika berhasil
            setLoading(false);
            toast.success("Succes");
          } else {
            throw new Error("Gagal mengirim data.");
          }
        })
        .catch((error) => {
          setLoading(false);
          toast.error("Something wrong");
        });
      await delay(300);
    } catch (error) {
      console.error("Unexpected Error:", error); // Logging error tak terduga
      toast.error("Kesalahan Sistem Coba Lagi Nanti");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen container">
      {/* Hero Section */}
        <header className="text-center py-6 mt-10">
          <h1 className="text-4xl font-semibold text-main-primary mb-2">Hubungi Kami</h1>
          <p className="text-textColor-secondary max-w-2xl mx-auto">Kami siap membantu Anda! Jangan ragu untuk menghubungi kami melalui formulir di bawah ini atau informasi kontak yang tersedia.</p>
        </header>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-textColor-primary">Kirim Pesan Anda</h2>
            <form name="submit-to-google-sheet" className="bg-white p-6 rounded-lg shadow-lg space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-semibold text-textColor-primary">
                  Nama
                </label>
                <input type="text" id="name" name="nama" placeholder="Nama Anda" className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-textColor-primary font-semibold">
                  Email
                </label>
                <input type="email" id="email" name="email" placeholder="Email Anda" className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-textColor-primary font-semibold">
                  Pesan
                </label>
                <textarea id="message" name="pesan" rows="5" placeholder="Pesan Anda" className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300" required></textarea>
              </div>
              <button type="submit" className="w-full bg-main-primary text-textColor-white font-bold py-3 rounded-lg hover:bg-main-accent transition duration-300">
                {loading ? <span className="loading loading-dots loading-md"></span> : "Kirim Pesan"}
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-textColor-primary">Informasi Kontak</h2>
            <p className=" leading-relaxed text-textColor-secondary">Jangan ragu untuk menghubungi kami melalui informasi di bawah ini. Kami akan dengan senang hati membantu Anda.</p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-textColor-primary">Alamat:</h3>
                <p className=" text-textColor-secondary">Jl. Kesehatan No. 123, Medan, Indonesia</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-textColor-primary">Email:</h3>
                <p className="text-textColor-secondary">contact@rsbenaya.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-textColor-primary">Telepon:</h3>
                <p className="text-textColor-secondary">+62 812 3456 7890</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-textColor-primary">Ikuti Kami:</h3>
              <div className="flex space-x-4 mt-3">
                <Link href={"https://www.instagram.com/roymen.y/"}>
                  <Image className="max-w-[100px] hover:opacity-85" alt="Instagram" src={"/images/instagram.svg"} width={30} height={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
