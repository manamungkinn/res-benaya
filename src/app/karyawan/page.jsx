"use client";
import Image from "next/image";
import Link from "next/link";

const employees = [
  { id: 1, name: "Dr. Roy Priman", position: "Dokter Umum", image: "/images/roy.jpg", detail: "https://www.instagram.com/roymen.y/" },
  { id: 2, name: "Dr. Novita Basauli", position: "Dokter Anak", image: "/images/novita.jpg", detail: "https://www.instagram.com/vitauliii_/" },
  { id: 3, name: "Dr. Andre Sianturi", position: "Spesialis Bedah", image: "/images/andre.jpg", detail: "https://www.instagram.com/_anefsi/" },
  { id: 4, name: "Dr. Mikael Hotasi", position: "Psikolog Klinis", image: "/images/mikael.jpg", detail: "https://www.instagram.com/mikaelhotasii/" },
  { id: 5, name: "Abang Indra", position: "Perawat", image: "/images/indra.jpg", detail: "https://www.instagram.com/arn28._/" },
];

const EmployeePage = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Tim Profesional Kami</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {employees.map((employee) => (
          <div key={employee.id} className="bg-white grid grid-rows-1 rounded-lg shadow-md hover:shadow-lg transition-all">
            <Image
              width={200}
              height={200}
              src={employee.image}
              alt={employee.name}
              className="w-55 h-50 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-3 text-center">{employee.name}</h2>
            <p className="text-center text-gray-600">{employee.position}</p>
            <Link
              href={employee.detail}
              className="text-center text-sm md:text-base block mt-3 text-blue-500 hover:underline"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeePage;
