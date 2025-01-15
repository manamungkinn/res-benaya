"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md w-full mx-auto">
      <h2 className="md:text-2xl text-xl text-textColor-primary font-bold mb-4 text-center">Hubungi Kami</h2>
      <div className="flex justify-center gap-4 items-center">
        <Link href={"https://www.instagram.com/roymen.y/"}>
          <Image className="w-[60px] md:w-[100px] hover:opacity-85" alt="Instagram" src={"/images/instagram.svg"} width={300} height={300} />
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=6282215647042"}>
          <Image className="w-[60px] md:w-[100px] hover:opacity-85" alt="WhatsApp" src={"/images/whatsapp.svg"} width={300} height={300} />
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
