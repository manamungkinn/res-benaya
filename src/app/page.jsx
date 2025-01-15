import BookingForm from "@/components/BookingForm";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import KataKataHariIni from "@/components/KataKataHariIni";
import ServiceList from "@/components/ServiceList";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container min-[1300px]:max-w-screen-2xl">
        <main>
          <HeroSection />
          <ContactForm />
          <ServiceList />
          {/* <BookingForm /> */}
        </main>
      </div>
    </div>
  );
}
