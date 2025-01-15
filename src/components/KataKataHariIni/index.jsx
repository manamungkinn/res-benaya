import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const KataKataHariIni = ({text1,text2,text3,image}) => {
  return (
    <div className="flex items-center space-x-4 px-4">
      {/* Gambar di kiri */}
      <div className="w-[70%] md:w-1/3">
        <Image src={image} width={600} height={600} alt="Image" className="w-full h-auto" />
      </div>

      {/* Teks di kanan */}
      <div className="w-2/3">
        <h2 className="text-sm md:text-2xl text-textColor-primary font-bold mb-2">{text1}</h2>
        <p className="text-xs text-textColor-secondary md:text-lg">
            {text2}
        </p>
        <Link href={'https://www.instagram.com/mikaelhotasii/'} className='text-xs md:text-sm font-semibold underline text-textColor-primary w-fit'>
        {text3}
        </Link>
      </div>
    </div>
  );
};

export default KataKataHariIni;
