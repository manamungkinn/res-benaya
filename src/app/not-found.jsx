'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col justify-center text-main-accent items-center h-[80vh] text-center">
        <div className=" inline-block">
          <div className="flex justify-center flex-col">
            <h1 className="text-textColor-primary text-xl font-semibold">Gada Apa Apa Sini Bg Balek Ajalah</h1>
            <Image src={'/images/mikael.jpg'} width={300} height={300} alt="kael"/>
          </div>
        </div>
        <button onClick={() => router.back()} className="underline text-main-primary hover:text-main-accent mt-4">
          tombol balek
        </button>
      </div>
    </div>
  );
};

export default page;
