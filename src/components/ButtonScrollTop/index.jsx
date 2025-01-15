"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ButonScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topBack=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="container">
      {visible ? (
        <button onClick={topBack} className="p-4 bg-main-accent hover:bg-opacity-85 w-fit rounded-lg">
          <IoIosArrowUp />
        </button>
      ) : null  }
    </div>
  );
};

export default ButonScrollTop;
