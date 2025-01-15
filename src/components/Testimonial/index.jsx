"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
      offset: 500,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Siti",
      review: "Layanan sangat profesional dan hasilnya memuaskan!",
      image: "/images/novita.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmad",
      review: "Pembersihan sofa saya sangat bersih dan cepat!",
      image: "/images/andre.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Budi",
      review: "Tim sangat ramah dan tepat waktu. Sangat direkomendasikan!",
      image: "/images/indra.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="bg-base-200 py-8">
      <h2 className="text-2xl font-bold text-textColor-primary text-center mb-6">Apa Kata Pelanggan Kami</h2>
      <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="card bg-white shadow-lg p-6 rounded-md">
              <Image width={300} height={300} alt="Image" src={review.image} />
              <h3 className="text-lg font-bold text-textColor-primary">{review.name}</h3>
              <p className="mt-2 text-textColor-secondary">{review.review}</p>
              <div className="rating mt-4">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500">
                    &#9733;
                  </span>
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <span key={i} className="text-gray-400">
                    &#9734;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
