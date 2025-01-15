import React from 'react'

const apa = () => {
  return (
    <div>
                  <div
            onMouseEnter={() => {
              setDropDown(true);
            }}
            onMouseLeave={() => {
              setDropDown(false);
            }}
            className="w-fit h-fit"
          >
            <button
              onClick={() => {
                setDropDown((prev) => {
                  !prev;
                  console.log({ tombolnya: prev });
                });
                console.log("dropdown");
              }}
              className={`px-5 cursor-pointer text-ml text-textColor-primary font-semibold block py-2 md:py-3`}
            >
              Service
              <span className="ml-1 transform -translate-y-1/2 text-xs">&#x25BC;</span> {/* Panah ke bawah */}
            </button>
            <span className="block h-[2px] bg-main-primary w-0 group-hover:w-full transition-all duration-300"></span>
            {dropDown && (
              <div
                className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1">
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>
    </div>
  )
}

export default apa