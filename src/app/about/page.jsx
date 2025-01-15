"use client";

import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-6 mt-10">
        <h1 className="text-4xl font-semibold text-main-primary mb-2">Tentang Kami</h1>
        <p className="text-textColor-secondary max-w-2xl mx-auto">
          Temukan cerita di balik komitmen kami dalam memberikan layanan kesehatan terbaik untuk masyarakat.
        </p>
      </header>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="w-full">
            <Image src="/images/royal.jpg" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-textColor-primary">Siapa Kami?</h2>
            <p className="leading-relaxed text-textColor-secondary">
              Rumah Sakit Benaya adalah fasilitas kesehatan yang berdedikasi untuk memberikan perawatan medis yang berkualitas tinggi dengan pendekatan profesional dan berempati.
            </p>
            <p className="text-textColor-secondary leading-relaxed mt-4">
              Dengan tim dokter spesialis, perawat berpengalaman, dan teknologi modern, kami berkomitmen untuk melayani kebutuhan kesehatan masyarakat dengan sepenuh hati.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-textColor-primary">Misi dan Visi Kami</h2>
            <p className="text-textColor-secondary leading-relaxed">
              <span className="font-semibold">Misi:</span> Menyediakan layanan kesehatan yang terpercaya, inovatif, dan terjangkau untuk semua lapisan masyarakat.
            </p>
            <p className="text-textColor-secondary leading-relaxed mt-4">
              <span className="font-semibold">Visi:</span> Menjadi pusat pelayanan kesehatan terkemuka di Indonesia yang dikenal dengan kualitas dan profesionalisme.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <Image src="/images/dokter.jpg" alt="Mission and Vision" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-8 text-textColor-primary">Dokter Profesional Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Doctor 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/images/novita2.jpg" alt="Dr. Amelia" width={300} height={300} className="w-55 h-30 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-textColor-primary">Dr. Amelia Rahmawati</h3>
              <p className="text-textColor-secondary">Spesialis Penyakit Dalam</p>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/images/andre.jpg" alt="Dr. Bayu" width={300} height={300} className="w-55 h-30 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-textColor-primary">Dr. Bayu Pratama</h3>
              <p className="text-textColor-secondary">Spesialis Bedah</p>
            </div>

            {/* Doctor 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/images/indra.jpg" alt="Dr. Citra" width={300} height={300} className="w-55 h-30 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-textColor-primary">Dr. Citra Larasati</h3>
              <p className="text-textColor-secondary">Spesialis Anak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-gray-100 py-12">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4 text-textColor-white">Ingin tahu lebih banyak?</h2>
          <p className="mb-6 text-textColor-white">
            Hubungi kami untuk informasi lebih lanjut atau jadwalkan konsultasi dengan dokter kami.
          </p>
          <Link href="https://api.whatsapp.com/send?phone=6282215647042">
            <button className="btn btn-primary text-textColor-white">Hubungi Kami</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
